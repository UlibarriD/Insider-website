// Import game model
const Game = require("../util/database").models.game;

// Create
exports.postNewGame = (req, res) => {
    Game.create(req.body)
        .then(result => res.send("SUCCESS"))
        .catch(error => res.send(error))
}
