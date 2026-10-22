const dns=require('dns');
dns.setServers(['1.1.1.1','8.8.8.8'])

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

const peliculasRoutes = require('./routes/peliculasRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const calificacionesRoutes = require('./routes/calificacionesRoutes');

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection;

db.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.use('/api/peliculas', peliculasRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/calificaciones', calificacionesRoutes);