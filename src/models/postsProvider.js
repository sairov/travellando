const { conn, openConn } = require('./connection');

module.exports = {
    getAllPosts: () => {   
       return new Promise((resolve, reject) => {
            openConn();
            conn.query('SELECT * FROM post;', (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
                // conn.end(() => console.log('Cierre exitoso'));
            });
        });
    },
    getPostByID: (id) => {   
        return new Promise((resolve, reject) => {
             openConn();
             conn.query('SELECT * FROM post WHERE id = ?;', id, (err, result) => {
                 if (err) {
                     reject(err);
                 } else {
                     resolve(result);
                 }
                //  conn.end(() => console.log('Cierre exitoso'));
             });
         });
     },
    saveNewPost: (values) => {   
        return new Promise((resolve, reject) => {
            openConn();
            conn.query(`INSERT INTO post 
            (title, subtitle, summary, destiny, city, category, imagePath, caption, createdAt, updatedAt) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`, values, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
                // conn.end(() => console.log('Cierre exitoso'));
            });
         });
     }
}