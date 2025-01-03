// models/users.js (Backend)

const mongoose = require('mongoose');

// Define the schema for the User
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensure unique usernames
        trim: true,
        minlength: [3, 'Username must be at least 3 characters long'],
        maxlength: [30, 'Username can be at most 30 characters long']
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure unique emails
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long']
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create a model based on the schema
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
