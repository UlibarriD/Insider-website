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
function checkNotAuthenticated(req, res, next) {
    if(req.isAuthenticated()){
        return res.redirect('/insider')
    }
    next()
}

// CREATE
router.post('/nuevoJugador', checkNotAuthenticated, playerController.postNuevoJugador);
// READ
router.get('/iniciarSesion', checkNotAuthenticated, playerController.getIniciarSesion);
router.post('/iniciarSesion', checkNotAuthenticated, playerController.postIniciarSesion);
router.get('/jugador', checkAuthenticated, playerController.getJugador);
router.get('/datosJugador', checkAuthenticated, playerController.getDatosJugador);
router.get('/cerrarSesion', checkAuthenticated, playerController.getLogOut);
// UPDATE

// DELETE

module.exports = router;
