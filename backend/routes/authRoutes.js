const express = require('express');
const { register, login } = require('../controllers/authController'); // Ensure correct path
const authMiddleware = require('../middleware/auth');

const router = express.Router();





// Define your routes
router.post('/login', login); // Ensure this matches the method in your controller


router.post('/signup', register);


router.get('/protected', authMiddleware, (req, res) => {
    res.send(`Welcome, ${req.user.email}`);
});

module.exports = router;
