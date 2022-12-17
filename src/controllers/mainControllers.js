const { getAllPosts, getPostByID } = require('../models/postsProvider');
const { getCountries } = require('../models/countriesProvider');

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
    blog: async (req, res) => {

        const data = await getAllPosts();
        // const country = getCountries().filter(country => country.id == data.destiny);

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
    post: async (req, res) => {
        const data = await getPostByID(req.params.id);
        console.log('Element: ', new Date(data[0].updatedAt).toLocaleDateString(
            'es-AR',
            {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }
          ));

        res.render('post', {
            title: 'Posteo | Travellando',
            styles: [
                'post',
            ],
            data: {
            ...data[0],
            updatedAt: new Date(data[0].updatedAt).toLocaleDateString(
                'es-AR',
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }
              )
            }
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