const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { OAuth2Client } = require("google-auth-library");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const mongoURI = "mongodb://localhost:27017/clients";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB:", err));

const userSchema = new mongoose.Schema({
    First_Name: { type: String },
    Last_Name: { type: String },
    Username: { type: String, required: true },
    Email: { type: String, unique: true, required: true },
    Password: { type: String },
    PhoneNumber: { type: String },
    DateOfBirth: { type: String },
    GoogleClientID: { type: String },
    GoogleCredentials: { type: Object },
});

const User = mongoose.model("User", userSchema);

const registerAccountSchema = new mongoose.Schema({
    Email: { type: String, required: true },
    Username: { type: String, required: true },
    Password: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const RegisterAccount = mongoose.model("RegisterAccount", registerAccountSchema);

const loginAccountSchema = new mongoose.Schema({
    Email: { type: String, required: true },
    lastLogin: { type: Date, default: Date.now },
});

const LoginAccount = mongoose.model("LoginAccount", loginAccountSchema);

// Google OAuth2 client
const client = new OAuth2Client('392493820492-6gfqm2ttjc60nv8dc0uv2i45t34nk0f5.apps.googleusercontent.com');

// Function to verify Google token
async function verifyGoogleToken(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: '392493820492-6gfqm2ttjc60nv8dc0uv2i45t34nk0f5.apps.googleusercontent.com',
    });
    const payload = ticket.getPayload();
    return payload;
}

// Register route
app.post("/register", async (req, res) => {
    const { First_Name, Last_Name, Username, Email, Password, PhoneNumber, DateOfBirth } = req.body;

    if (!Username || !Email || !Password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const existingEmail = await User.findOne({ Email });

        if (existingEmail) {
            return res.status(409).json({ message: "Email is already in use. Please login." });
        }

        const hashedPassword = await bcrypt.hash(Password, 10);

        const newUser = new User({
            First_Name: First_Name || "",
            Last_Name: Last_Name || "",
            Username,
            Email,
            Password: hashedPassword,
            PhoneNumber: PhoneNumber || "",
            DateOfBirth: DateOfBirth || "",
        });

        await newUser.save();

        const newRegisterAccount = new RegisterAccount({
            Username,
            Email,
            Password: hashedPassword,
        });

        await newRegisterAccount.save();

        res.status(200).json({ message: "Registration successful" });
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Login route (for standard email/password login)
app.post("/login", async (req, res) => {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
        return res.status(400).json({ message: "Please provide both email and password" });
    }

    try {
        const user = await User.findOne({ Email });

        if (!user) {
            return res.status(400).json({ message: "Invalid Email or password." });
        }

        const isPasswordValid = await bcrypt.compare(Password, user.Password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid Email or password." });
        }

        const { Password: _, ...userData } = user.toObject();

        const newLoginAccount = new LoginAccount({
            Email: user.Email,
            Password: user.Password,
            lastLogin: new Date(),
        });

        await newLoginAccount.save();

        return res.status(200).json({
            message: "Login successful!",
            user: userData,
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post("/google-login", async (req, res) => {

    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ message: "Token is required" });
    }

    try {
        const payload = await verifyGoogleToken(token);

        const { email, given_name, family_name, sub } = payload;

        let user = await User.findOne({ Email: email });

        if (user) {
            user.GoogleClientID = sub;
            user.GoogleCredentials = payload;

            await user.save();

            res.status(200).json({
                message: "Google login successful",
                user: {
                    Username: user.Username,
                    Email: user.Email,
                    GoogleClientID: user.GoogleClientID,
                },
            });

        } else {
            const newUser = new User({
                First_Name: given_name,
                Last_Name: family_name,
                Email: email,
                Username: email.split('@')[0],
                PhoneNumber: "",
                DateOfBirth: "",
                GoogleClientID: sub,
                GoogleCredentials: payload,
            });

            await newUser.save();

            res.status(200).json({
                message: "Google login successful",
                user: {
                    Username: newUser.Username,
                    Email: newUser.Email,
                    GoogleClientID: newUser.GoogleClientID,
                },
            });
        }
    } catch (error) {
        console.error("Error verifying Google token:", error);
        res.status(400).json({ message: "Google login failed", error });
    }
});

// Delete route (optional, for user deletion based on email)
app.delete('/delete', async (req, res) => {
    const { Email } = req.body;

    if (!Email) {
        return res.status(400).send('Email is required');
    }

    try {
        console.log('Attempting to delete user with email:', "letmetryu075@gmail.com");

        const result = await User.deleteOne({ Email: Email });

        // Check if deletion was successful
        if (result.deletedCount === 0) {
            return res.status(404).send('User not found');
        }

        res.status(200).send('User deleted successfully');
    } catch (err) {
        console.error('Error deleting user:', err);  // Detailed error log
        res.status(500).send('There was an error deleting the user');
    }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
