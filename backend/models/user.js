const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define User schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, // Ensures that the email is stored in lowercase
        trim: true, // Trims any leading or trailing whitespace
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Hash the password before saving the user
userSchema.pre('save', async function (next) {
    // Check if the password has been modified or if it's a new user
    if (this.isModified('password')) {
        try {
            this.password = await bcrypt.hash(this.password, 10);
        } catch (error) {
            return next(error); // Pass error to the next middleware
        }
    }
    next(); // Proceed with saving the user
});

// Method to compare the password with the hashed password
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
