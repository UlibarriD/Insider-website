// Import librarys
const express = require("express");
const router = express.Router();
const playerController = require("../controllers/player.js")

// CREATE
router.get('/nuevoJugador', playerController.getNuevoJugador);
router.post('/nuevoJugador', playerController.postNuevoJugador);
// READ
router.get('/iniciarSesion', playerController.getIniciarSesion);
router.get('/datosJugador', playerController.getDatosJugador);
// UPDATE

// DELETE


// POST

module.exports = router;
