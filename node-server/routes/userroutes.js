const express = require('express');
const router = express.Router();
const { signup, login, profile } = require('../controller/userController');
const { verifyToken } = require('../middlewares/authuser');

// Signup endpoint
router.post('/signup', signup);

// Login endpoint
router.post('/login', login);

// Profile endpoint
router.get('/profile', verifyToken, profile);

module.exports = router;
