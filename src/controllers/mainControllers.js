const service = require('../models/getPosts');

module.exports = {
    index: (req, res) => {
        res.render('home', {
            title: 'Home | Travellando',
            styles: [
                'normalize',
                'header',
                'index',
                'footer'
            ]
        });
    },
    blog: (req, res) => {

        const data = service.getAllPosts();

        console.log(data);

        res.render('blog', {
            title: 'Blog | Travellando',
            styles: [
                'normalize',
                'header',
                'index',
                'footer'
            ],
            data
        });
    },
    contact: (req, res) => {
        res.render('contact', {
            title: 'COntacto | Travellando',
            styles: [
                'normalize',
                'header',
                'index',
                'footer'
            ]
        });
    },
    post: (req, res) => {
        res.render('post', {
            title: 'Posteo | Travellando',
            styles: [
                'normalize',
                'header',
                'post',
                'footer'
            ]
        });
    },
    login: (req, res) => {
        res.render('./auth/login', {
            title: 'Ingresar | Travellando',
            styles: [
                'normalize',
                'header',
                'login',
                'footer'
            ]
        });
    }
}