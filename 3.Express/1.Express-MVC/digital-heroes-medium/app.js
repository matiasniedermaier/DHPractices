const express = require('express');
const app = express();

// Routes
const mainRouter = require('./routes/main');
const heroesRouter = require('./routes/heroes');

// Server
app.listen(3000, () => console.log('Server running in port 3000'));

// Route System
app.use('/heroes', heroesRouter);
app.use('/', mainRouter);