const mongoose = require('mongoose');
const schema = mongoose.Schema;

const usuarioSchema = new schema({
    email: {type: String},
    password_hash: {type: String},
    nombre: {type: String},
    pais: {type: String},
    fecha_registro: {type: Date},
    suscripcion: {
        plan: {type: String},
        estado: {type: String},
        fecha_renovacion: {type: Date}
    },
    perfiles: {type: [{
        perfil_id: {type: String},
        nombre: {type: String},
        idioma: {type: String},
        infantil: {type: Boolean},
    }]},
})

const Usuario = mongoose.model('Usuario', usuarioSchema, 'usuarios');
module.exports = Usuario;