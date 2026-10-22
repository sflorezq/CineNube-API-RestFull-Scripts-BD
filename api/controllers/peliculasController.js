const peliculas = require('../models/peliculas');

//Consultar lista de peliculas
const index = (req,res,next) => {
    console.log('Consultando lista de peliculas...');
    peliculas.find()
    .then(response => {
        res.json(response);
    })
    .catch(error => {
        next(error);
    });
};

const activas = (req,res,next) => {
    peliculas.find({activa: true})
    .then(response => {
        res.json(response);
    })
    .catch(error => {
        next(error);
    });
};

const mejorCalificadas = (req,res,next) => {
    peliculas.find()
    .sort({'estadisticas.promedio': -1, 'estadisticas.total_calificaciones': -1})
    .limit(10)
    .then(response => {
        res.json(response);
    })
    .catch(error => {
        next(error);
    });
};

const create = (req,res,next) => {
    const {titulo, titulo_original, tipo, anio, generos} = req.body;
    const camposFaltantes = [];

    if (typeof titulo !== 'string' || !titulo.trim()) camposFaltantes.push('titulo');
    if (typeof titulo_original !== 'string' || !titulo_original.trim()) camposFaltantes.push('titulo_original');
    if (typeof tipo !== 'string' || !tipo.trim()) camposFaltantes.push('tipo');
    if (anio === undefined || anio === null || anio === '') camposFaltantes.push('anio');
    if (!Array.isArray(generos) || generos.length === 0) camposFaltantes.push('generos');

    if (camposFaltantes.length > 0) {
        return res.status(400).json({
            message: 'Faltan campos obligatorios o tienen un formato inválido',
            campos: camposFaltantes
        });
    }

    const pelicula = new peliculas(req.body);
    pelicula.save()
    .then(response => {
        res.status(201).json(response);
    })
    .catch(error => {
        next(error);
    });
};

const deletePelicula = (req,res,next) => {
    peliculas.findByIdAndUpdate(
        req.params.id,
        {activa: false},
        {new: true, runValidators: true}
    )
    .then(response => {
        if (!response) {
            return res.status(404).json({message: 'Pelicula no encontrada'});
        }
        res.json(response);
    })
    .catch(error => {
        next(error);
    });
};

module.exports = {
    index,
    activas,
    mejorCalificadas,
    create,
    delete: deletePelicula
};