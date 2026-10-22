const express = require('express');
const router = express.Router();

const peliculasController = require('../controllers/peliculasController');

//obtener lista de peliculas
router.get('/', peliculasController.index);
router.get('/activas', peliculasController.activas);
router.get('/mejor-calificadas', peliculasController.mejorCalificadas);
router.post('/create', peliculasController.create);
router.delete('/:id', peliculasController.delete);

module.exports = router;