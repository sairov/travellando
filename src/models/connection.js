const mysql = require('mysql');
require('dotenv').config();

const config = {
    connectionLimit: 5,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    insecureAuth : true
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