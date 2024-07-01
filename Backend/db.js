// db.js
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'litter_tracer'
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected...');
});

module.exports = connection;
