// routes/issueRoutes.js
const express = require('express');
const router = express.Router();
const Issue = require('../models/issue');

// @route   POST /api/issues
// @desc    Create an issue
router.post('/', async (req, res) => {
    const { issueType, description, location, latitude, longitude, image } = req.body;

    try {
        const newIssue = new Issue({
            issueType,
            description,
            location,
            latitude,
            longitude,
            image
        });

        const savedIssue = await newIssue.save();
        res.json(savedIssue);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});

// @route   GET /api/issues
// @desc    Get all issues
router.get('/', async (req, res) => {
    try {
        const issues = await Issue.find();
        res.json(issues);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;
