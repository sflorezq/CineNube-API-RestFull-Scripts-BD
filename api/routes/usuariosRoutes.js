const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

//obtener lista de usuarios
router.get('/', usuariosController.index);
router.post('/', usuariosController.create);
router.get('/:id', usuariosController.findById);
router.delete('/:id', usuariosController.delete);

module.exports = router;