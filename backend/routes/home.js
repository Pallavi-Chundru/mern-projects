const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Protected Home Page route
router.get('/home', auth, (req, res) => {
    res.json({ message: `Welcome ${req.user.id}, this is the home page!` });
});

// Another protected route (e.g., dashboard)
router.get('/dashboard', auth, (req, res) => {
    res.json({ message: `Dashboard access granted for user ${req.user.id}` });
});

module.exports = router;
