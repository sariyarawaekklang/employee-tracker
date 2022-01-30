const mysql = require('mysql2');

// connect to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'a1b2c3d4',
    database: ''
});

module.exports = db;