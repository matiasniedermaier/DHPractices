// Require de Express
const express = require('express');

// Ejecución de Express
const app = express();

// Requiere rutas
const mainRouter = require('./routes/main');
const heroesRouter = require('./routes/heroes');

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Rutas
app.use('/heroes', heroesRouter);
app.use('/', mainRouter);
