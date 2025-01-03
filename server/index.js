const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize the Express app
const app = express();
const port = 5173;  // Change this to avoid port conflict

// Middleware to parse JSON data
app.use(bodyParser.json());

// CORS configuration (Allow requests from the frontend running on localhost:3000)
const corsOptions = {
    origin: "http://localhost:5173",  // Update to your frontend's port
    methods: "GET, POST, PUT, DELETE, HEAD, PATCH",
    credentials: true,
};
app.use(cors(corsOptions));

// In-memory mock database (you can replace this with a real database)
let users = [];

// Handle POST request for registration
app.post('/register', (req, res) => {
    const { Username, Email, Password } = req.body;

    // Check if all required fields are provided
    if (!Username || !Email || !Password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if the email already exists
    const existingUser = users.find(user => user.Email === Email);
    if (existingUser) {
        return res.status(400).json({ message: 'Email is already registered.' });
    }

    // Mock user registration (in a real app, hash the password before storing)
    const newUser = { Username, Email, Password };
    users.push(newUser);

    // Return success message
    res.status(200).json({ message: 'Registration successful!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Backend is running on http://localhost:${port}`);
});
