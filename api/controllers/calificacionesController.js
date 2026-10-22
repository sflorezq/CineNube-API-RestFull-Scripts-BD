const calificaciones = require('../models/calificaciones');

const index = (req,res,next) => {
    calificaciones.find()
    .then(response => {
        res.json(response);
    })
    .catch(error => {
        next(error);
    });
};

const porUsuario = (req,res,next) => {
    calificaciones.find({usuario_id: req.params.usuario_id})
    .then(response => {
        res.json(response);
    })
    .catch(error => {
        next(error);
    });
};

const porPelicula = (req,res,next) => {
    calificaciones.find({pelicula_id: req.params.pelicula_id})
    .then(response => {
        res.json(response);
    })
    .catch(error => {
        next(error);
    });
};

module.exports = {
    index,
    porUsuario,
    porPelicula
};