const mysql = require('mysql');
require('dotenv').config();

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
}

const conn = mysql.createConnection(config);

const openConn = () => {
   return conn.connect(err => {
        if (err) {
            console.log(err);
        } else {
            console.log('Conexión exitosa');
        }
    });
};

module.exports = { conn, openConn };