const { getCountries } = require('../models/countriesProvider');

module.exports = {
    admin: (req, res) => {
        res.render('./admin/admin', {
            title: 'Lista de Posteos | Travellando',
            styles: [
                'normalize',
                'header',
                'footer'
            ]
        });
    },
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
    save: (req, res) => {

        console.log(req.body);

        res.render('./admin/admin', {
            title: 'Lista de Posteos | Travellando',
            styles: [
                'normalize',
                'header',
                'footer'
            ]
        });
    }
}