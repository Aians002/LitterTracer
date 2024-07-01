// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./db'); // Import the MySQL connection

// Middleware
app.use(bodyParser.json());
app.use(cors());

// User model (as a utility function)
const createUserTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    )
  `;
  db.query(query, (err, results) => {
    if (err) throw err;
    console.log('User table created or already exists.');
  });
};

createUserTable(); // Call the function to create the user table if it doesn't exist

// Routes
app.use('/api/users', require('./routes/users'));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
