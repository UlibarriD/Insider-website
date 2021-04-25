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
router.post('/nuevoJugador', checkNotAuthenticated, playerController.postSignUp);
// READ
router.get('/iniciarSesion', checkNotAuthenticated, playerController.getSignIn);
router.post('/iniciarSesion', checkNotAuthenticated, playerController.postSignIn);
router.post('/iniciarSesionUnity', playerController.postSignInUnity);
router.get('/datosJugadorUnity/:nickname', playerController.getPlayerDataUnity);
router.get('/jugador', checkAuthenticated, playerController.getPlayer);
router.get('/datosJugador', checkAuthenticated, playerController.getPlayers);
router.get('/cerrarSesion', checkAuthenticated, playerController.getLogOut);
// UPDATE

// DELETE

module.exports = router;
