// routes/users.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const router = express.Router();

// Registration
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    db.query('SELECT email FROM users WHERE email = ?', [email], async (err, results) => {
      if (results.length > 0) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (err, results) => {
        if (err) throw err;
        res.status(201).json({ msg: 'User registered successfully' });
      });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  try {
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
      if (results.length === 0) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      const user = results[0];
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        'yourSecretKey',
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
