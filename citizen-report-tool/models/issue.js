// models/Issue.js
const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
    issueType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    image: {
        type: String // URL or file path of the uploaded image
    },
    dateReported: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Issue', IssueSchema);
