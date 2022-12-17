const { getCountries } = require('../models/countriesProvider');
const { getAllPosts, saveNewPost } = require('../models/postsProvider');

module.exports = {
    admin: async (req, res) => {
        const result = await getAllPosts();
        res.render('./admin/admin', {
            title: 'Lista de Posteos | Travellando',
            styles: [
                'admin'
            ],
            posts: result
        });
    },
    // admin: (req, res) => { // ASINCRONISMO CON PROMISE THEN
    //     getAllPosts()
    //     .then(result => {
    //         res.render('./admin/admin', {
    //             title: 'Lista de Posteos | Travellando',
    //             styles: [
    //                 'admin'
    //             ],
    //             posts: result
    //         });
    //     });
    // },
    // admin: (req, res) => { // ASINCRONISMO CALLBACKS
    //     getAllPosts((err, result, fields) => {
    //         if (err) {
    //             return err;
    //         } else {
    //             res.render('./admin/admin', {
    //                 title: 'Lista de Posteos | Travellando',
    //                 styles: [
    //                     'admin'
    //                 ],
    //                 posts: result
    //             });
    //         }
    //     });
    // },
    create: (req, res) => {
        const countries = getCountries();
        
        res.render('./admin/create', {
            title: 'Crear nuevo posteo | Travellando',
            styles: [
                'normalize',
                'header',
                'login',
                'footer'
            ],
            countries
        });
    },
    save: async (req, res) => {

        const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');

        const values = [
            req.body.title,
            req.body.subtitle,
            req.body.description,
            req.body.countries,
            req.body.cityCode,
            req.body.category,
            req.body.imagePath,
            req.body.caption,
            createdAt,
            createdAt
        ];

        await saveNewPost(values);
        res.redirect('/blog');
    }
}