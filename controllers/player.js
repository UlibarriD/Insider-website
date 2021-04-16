//Import models
const Player = require("../models/player.js");

// CREATE
exports.postNuevoJugador = (req, res) => {
    console.log(req.body);
    // Add records to DB
    Player.create(req.body)
        .then(result => console.log("Registro exitoso"))
        .catch(error => console.log(error))

    res.redirect('/insider/jugador');
};
// READ
exports.getIniciarSesion = (req, res)=>{
    res.render('login.html');
};
exports.getjugador = (req, res) =>{
    Player.findAll()
    .then(players => {
        var player_data = [];
        players.forEach(player => {
            player_data.push(player.dataValues);
        })
        console.log(player_data);

        res.render('player.html', {
            players: player_data,
        });
    })
    .catch(error => console.log(error))
};


exports.getDatosJugador = (req,res) => {
    Player.findAll()
        .then(players => {
            var player_data = [];
            players.forEach(player => {
                player_data.push(player.dataValues);
            })
            console.log(player_data);

            res.render('steamdata.html', {
                players: player_data,
            });
        })
        .catch(error => console.log(error))
};
// UPDATE

//DELETE
