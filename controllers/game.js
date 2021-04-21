// Import game model
const Game = require("../util/database").models.game;

// Create
exports.postNewGame = (req, res) => {
    Game.create(req.body)
        .then(result => console.log("Partida creada"))
        .catch(error => console.log(error))
}
