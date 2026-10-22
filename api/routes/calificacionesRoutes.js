const express = require('express');
const router = express.Router();

const calificacionesController = require('../controllers/calificacionesController');

router.get('/', calificacionesController.index);
router.get('/usuario/:usuario_id', calificacionesController.porUsuario);
router.get('/pelicula/:pelicula_id', calificacionesController.porPelicula);

module.exports = router;