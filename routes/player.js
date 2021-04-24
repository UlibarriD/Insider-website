// Import librarys
const express = require("express");
const router = express.Router();
const playerController = require("../controllers/player")

// Check if player is authenticated
function checkAuthenticated(req, res, next) {
    if(req.isAuthenticated()){
        return next()
    }

    res.redirect('/insider/iniciarSesion')
}

// CREATE
router.post('/nuevoJugador', playerController.postNuevoJugador);
// READ
router.get('/iniciarSesion', playerController.getIniciarSesion);
router.post('/iniciarSesion', playerController.postIniciarSesion);
router.get('/jugador', checkAuthenticated, playerController.getJugador);
router.get('/datosJugador', playerController.getDatosJugador);
// UPDATE

// DELETE

module.exports = router;
