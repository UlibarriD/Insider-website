// Import models and bcrypt
const Player = require("../util/database").models.player;
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('connect-flash');

// CREATE
exports.postSignUp = (req, res) => {
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
                res.render('login.html', {
                    estados: ["Estado de México", "Ciudad de México", "Hidalgo", "Nuevo León", 
                    "Queretaro", "Baja California", "Baja California Sur", "Colima", "Jalisco", 
                    "Coahuila", "Oaxaca", "Campeche", "Chiapas", "Chihuahua", "Duarngo", "Guanajuato", "Guerrero", 
                    "Michoacan", "Morelos", "Nayarit", "Puebla", "Quintana Roo", "San Luis Potosi", "Sinaloa",
                    "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatan", "Zacatecas"].sort(),
                     errors : errors,   
                });
            } else {
                const newPlayer = new Player({
                    name: req.body.name,
                    last_name: req.body.last_name,
                    nickname: req.body.nickname,
                    date_of_birth: req.body.date_of_birth,
                    gender: req.body.gender,
                    state: req.body.state,
                    password: req.body.password,
                    page_policies: req.body.page_policies
                })
                // hash password
                bcrypt.genSalt(10,(err,salt) => bcrypt.hash(newPlayer.password,salt, (err,hash)=> {
                    if(err) throw err;
                        newPlayer.password = hash;
                    newPlayer.save()
                    .then((value)=>{
                        console.log(value)
                        res.redirect('/insider/iniciarSesion');
                    })
                    .catch(value=> console.log(value));
                }));
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
};

// READ
exports.getSignIn = (req, res)=>{
    res.render('login.html', {
        estados: ["Estado de México", "Ciudad de México", "Hidalgo", "Nuevo León", 
        "Queretaro", "Baja California", "Baja California Sur", "Colima", "Jalisco", 
        "Coahuila", "Oaxaca", "Campeche", "Chiapas", "Chihuahua", "Duarngo", "Guanajuato", "Guerrero", 
        "Michoacan", "Morelos", "Nayarit", "Puebla", "Quintana Roo", "San Luis Potosi", "Sinaloa",
        "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatan", "Zacatecas"].sort()
    });
};
exports.postSignIn = passport.authenticate('local', {
    successRedirect: '/insider/jugador',
    failureRedirect: '/insider/iniciarSesion',
});
exports.postSignInUnity = passport.authenticate('local', {
	successRedirect: 'hola',
	failureRedirect: 'mundo'
});
/*exports.postSignInUnity = (req, res)=>{
	passport.authenticate('local', {
		if (err) { return res.send(err); }
		if (!user) { return res.send('Invalid'); }
		req.logIn(user, function(err) {
		  if (err) { return res.send('password'); }
		  return res.send('/users/');
		});
	})
};*/
exports.getLogOut = (req, res) => {
    req.logOut();
    res.redirect('/insider');
};
exports.getPlayer = (req, res) =>{
    res.render('player.html', {
        player: req.user
    })
};
exports.getPlayers = (req,res) => {
    res.render('steamdata.html')
};
