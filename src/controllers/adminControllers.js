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
        res.render('./admin/create', {
            title: 'Crear nuevo posteo | Travellando',
            styles: [
                'normalize',
                'header',
                'login',
                'footer'
            ]
        });
    }
}