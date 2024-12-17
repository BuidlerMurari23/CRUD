const express = require('express');
const { body } = require('express-validator');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// Register route
router.post(
  '/register',
  [
    body('name', 'Name is required').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  ],
  registerUser
);

// Login route
router.post('/login', loginUser);

module.exports = router;
