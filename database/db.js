const mysql = require('mysql2');

const Credentials = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  database: process.env.DB_NAME, 
  password: process.env.DB_PASSWORD,
};

const connection = mysql.createConnection(Credentials);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL DB:', err.message);
    throw err;
  }
  console.log('Connected to MySQL DB');
});

module.exports = connection;