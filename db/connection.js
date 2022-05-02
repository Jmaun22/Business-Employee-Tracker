const express = require('express');
// Import and require mysql2


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Importing mysql 2
const mysql = require('mysql2');



// connect to database

const connection = mysql.createConnection(
    {
        host: 'localhost',
        // mysql username
        user: 'root',
        // password for ysql
        password: 'rootroot',
        database: 'business_db'
    },
    console.log('Connected to business_db')
);


connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;