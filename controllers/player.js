//Import models
const Player = require("../util/database").models.player;

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
exports.getJugador = (req, res) =>{
    res.render('player.html', {
        player: ""
    })
};

exports.getIniciarSesion = (req, res)=>{
    res.render('login.html');
};

exports.postIniciarSesion = (req, res) =>{
    Player.findOne({
        where: {
			nickname:req.body.nickname,
            password:req.body.password
        } 
    })
    .then(player =>{
        if(!player){
            res.status(404).json({msg: "Usuario no encontrado"})
        } else {
            console.log(player.dataValues);
            res.redirect('/insider/jugador');
        }
    })
    .catch(error => {
        console.log(error);
    })
}

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
