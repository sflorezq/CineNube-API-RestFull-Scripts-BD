const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calificacionSchema = new Schema({
    usuario_id: {type: Schema.Types.ObjectId},
    perfil_id: {type: String},
    pelicula_id: {type: Schema.Types.ObjectId},
    puntaje: {type: Number},
    comentario: {type: String},
    fecha: {type: Date},
    pelicula_titulo: {type: String}
});

const Calificacion = mongoose.model('Calificacion', calificacionSchema, 'calificaciones');
module.exports = Calificacion;