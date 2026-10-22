const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const peliculaSchema = new Schema({
    titulo: {type: String},
    titulo_original: {type: String},
    tipo: {type: String},
    anio: {type: Number},
    duracion_min: {type: Number},
    sinopsis: {type: String},
    generos: {type: [String]},
    director: {type: String},
    reparto: {type: [{
        actor: {type: String},
        personaje: {type: String}
    }]},
    idiomas_audio: {type: [String]},
    subtitulos: {type: [String]},
    clasificacion: {
        "CO": {type: String},
        "MX": {type: String},
    },
    poster_url: {type: String},
    video_url: {type: String},
    estadisticas: {
        promedio: {type: Number},
        total_calificaciones: {type: Number},
        suma_puntajes: {type: Number}
    },
    fecha_publicacion: {type: Date},
    activa: {type: Boolean, default: true}
})

const Pelicula = mongoose.model('Pelicula', peliculaSchema, 'peliculas');
module.exports = Pelicula;