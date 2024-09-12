const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Create a User using: POST "/api/auth/". Doesn't require Auth
router.post(
  '/',
  [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
  ],
  async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create the user
    try {
      let user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      res.json(user);
    } catch (err) {
      console.error(err);

      // Handle specific duplicate key error (e.g., email already exists)
      if (err.code === 11000) {
        return res.status(400).json({ error: 'Email must be unique' });
      }

      res.status(500).json({ error: 'Server error', message: err.message });
    }
  }
);

module.exports = router;