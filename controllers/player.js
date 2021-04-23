//Import models
const Player = require("../util/database").models.player;

// CREATE
exports.postNuevoJugador = (req, res) => {
    const {name, last_name, nickname, date_of_birth, gender, state, password ,password2, page_policies} = req.body;
    let errors = [];
    // Check all the fields are filled
    if(!name || !last_name || !nickname || !date_of_birth || !gender || !state || !password || !password2 || !page_policies) {
        errors.push({msg : "Porfavor llena todos los espacios. "})
    }
    // Chech if the passwords match
    if(password !== password2) {
        errors.push({msg : "Las contraseñas no coinciden. "});
    }
    // Check password length is greather than 6
    if(password.length < 6 ) {
        errors.push({msg : 'La contraseña debe tener al menos 6 caracteres. '})
    }

    if(errors.length > 0) {
        res.render('login.html', {
            estados: ["Estado de México", "Ciudad de México", "Hidalgo", "Nuevo León", 
            "Queretaro", "Baja California", "Baja California Sur", "Colima", "Jalisco", 
            "Coahuila", "Oaxaca", "Campeche", "Chiapas", "Chihuahua", "Duarngo", "Guanajuato", "Guerrero", 
            "Michoacan", "Morelos", "Nayarit", "Puebla", "Quintana Roo", "San Luis Potosi", "Sinaloa",
            "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatan", "Zacatecas"].sort(),
            errors : errors,
        })
    } else {
        //validation passed
        Player.findOne({
            where: {
                nickname : nickname,
            }
        })
        .then(player => {
            console.log(player);
            if(player) {
                console.log("Ese usuario ya existe")
                errors.push({msg: 'Ese nickname ya existe'});
                render(res,errors);
            } else {
                // Add records to DB
                const newPlayer = Player.create(req.body)
                    .then(result => {
                        console.log("Registro exitoso");
                        res.redirect('/insider/jugador');
                        })
                    .catch(error => console.log(error))
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
};

// READ
exports.getJugador = (req, res) =>{
    console.log(req.query);
    Player.findOne({
        where: {
			nickname:req.query.nickname,
        } 
    })
    .then(user => {
        res.render('player.html', {
            player: user
        })
    })
    .catch(error => console.log(error))
};

exports.getIniciarSesion = (req, res)=>{
    res.render('login.html', {
        estados: ["Estado de México", "Ciudad de México", "Hidalgo", "Nuevo León", 
        "Queretaro", "Baja California", "Baja California Sur", "Colima", "Jalisco", 
        "Coahuila", "Oaxaca", "Campeche", "Chiapas", "Chihuahua", "Duarngo", "Guanajuato", "Guerrero", 
        "Michoacan", "Morelos", "Nayarit", "Puebla", "Quintana Roo", "San Luis Potosi", "Sinaloa",
        "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatan", "Zacatecas"].sort()
    });
};

exports.postIniciarSesion = (req, res) =>{
    Player.findOne({
        where: {
			nickname:req.body.nickname,
            password:req.body.password
        } 
    })
    .then(user =>{
        if(!user){
            res.status(404).json({msg: "Usuario no encontrado"})
        } else {
            console.log(user.dataValues);
            res.redirect("/insider/jugador?nickname=" + user.dataValues.nickname);
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
