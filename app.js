const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const PORT = 3000;


/* Archivos Estáticos */
app.use(express.static('public'));

/* Parseamos */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* View Engine */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

/* ROUTES */

app.use('/', mainRoutes);
app.use('/', adminRoutes);
app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Página No Encontrada | Travellando',
        styles: [
            'normalize',
            'header',
            'footer'
        ]
    })
});

app.listen(process.env.PORT || PORT, () => console.log(`Servidor corriendo en puerto: http://localhost:${PORT}`));