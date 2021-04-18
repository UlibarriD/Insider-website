// Import librarys
const express = require("express");
const router = express.Router();
const playerController = require("../controllers/player")

// CREATE
router.post('/nuevoJugador', playerController.postNuevoJugador);
// READ
router.get('/iniciarSesion', playerController.getIniciarSesion);
router.post('/iniciarSesion', playerController.postIniciarSesion);
router.get('/jugador', playerController.getJugador);
router.get('/datosJugador', playerController.getDatosJugador);
// UPDATE

// DELETE

module.exports = router;
