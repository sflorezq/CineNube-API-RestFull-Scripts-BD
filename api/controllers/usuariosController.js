const usuarios = require('../models/usuarios');

//Consultar lista de usuarios
const index = (req,res,next) => {
    console.log('Consultando lista de usuarios...');
    usuarios.find()
    .then(usuarios => {
        res.json(usuarios);
    })
    .catch(err => {
        next(err);
    });
};

const findById = (req,res,next) => {
    usuarios.findById(req.params.id)
    .then(usuario => {
        if (!usuario) {
            return res.status(404).json({message: 'Usuario no encontrado'});
        }
        res.json(usuario);
    })
    .catch(err => {
        next(err);
    });
};

const create = (req,res,next) => {
    const usuario = new usuarios(req.body);
    usuario.save()
    .then(usuario => {
        res.status(201).json(usuario);
    })
    .catch(err => {
        next(err);
    });
};

const deleteUsuario = (req,res,next) => {
    usuarios.findByIdAndDelete(req.params.id)
    .then(usuario => {
        if (!usuario) {
            return res.status(404).json({message: 'Usuario no encontrado'});
        }
        res.json({message: 'Usuario eliminado correctamente'});
    })
    .catch(err => {
        next(err);
    });
};

module.exports = {
    index,
    findById,
    create,
    delete: deleteUsuario
};