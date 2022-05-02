const express = require('express');

// Importing mysql 2
const mysql = require('mysql2');


// settting up the port 
const PORT = process.env.PORT || 3001;
const app = express();


// express middle ware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database

const db = mysql.createConnection(
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
// inquier







// Response with not found

app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});