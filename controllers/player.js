// Import models and bcrypt
const Player = require("../util/database").models.player;
const Game = require("../util/database").models.game;
const bcrypt = require('bcrypt');
const passport = require('passport');
const sequelize = require('../util/database');
const Sequelize = require('sequelize');

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
                        Game.create({ playerNickname: newPlayer.nickname, worldId: 1, end_date: '01/01/2021', score: 0});
                        Game.create({ playerNickname: newPlayer.nickname, worldId: 2, end_date: '01/01/2021', score: 0});
                        Game.create({ playerNickname: newPlayer.nickname, worldId: 3, end_date: '01/01/2021', score: 0});
                        Game.create({ playerNickname: newPlayer.nickname, worldId: 4, end_date: '01/01/2021', score: 0});
                        Game.create({ playerNickname: newPlayer.nickname, worldId: 5, end_date: '01/01/2021', score: 0});
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
exports.postSignInUnity = (req, res, next)=>{
	passport.authenticate('local', function(err, user) {
		if (err) { return next(err); }
		if (!user) { return res.send('WRONG CREDENTIALS'); }
		req.logIn(user, function(err) {
			if (err) { return next(err); }
			return res.send('SUCCESS');
		});
	})(req, res, next);
};
exports.getLogOut = (req, res) => {
    req.logOut();
    res.redirect('/insider');
};
exports.getPlayer = (req, res)  =>{
    const nickname = req.user.nickname;
    sequelize.query(`
        SELECT sum(score) as score, worldId, DATENAME(WEEKDAY, end_date) as date
        FROM game 
        WHERE playerNickname = '${nickname}' and end_date >= DATEADD(day, 1-DATEPART(dw, getdate()), convert(date, getdate())) 
        GROUP BY end_date, worldId`, {type:Sequelize.QueryTypes.SELECT})
        .then(result => {
            sequelize.query(`
            select ws.skillID as skill, sum(g.score * ws.score) as score 
            from worldSkill ws, game g 
            where ws.worldId = g.worldId and g.playerNickname = '${nickname}' 
            group by ws.skillId, ws.worldId 
            order by ws.skillId asc`, {type:Sequelize.QueryTypes.SELECT})
            .then(result2 => {
                res.render('player.html', {
                    player: req.user,
                    history: result,
                    skills: result2
                })
            })
        })
};

exports.getPlayers = (req,res) => {
    if(req.user.steam === 'on'){
        sequelize.query(`
        SELECT area, worldId, DATENAME(WEEKDAY, end_date) as date, COUNT(id) as dtendency
        FROM Game, World 
        WHERE id = worldId 
        GROUP BY area, DATENAME(WEEKDAY, end_date), worldId
        order by area, case 
        when DATENAME(WEEKDAY, end_date) = 'Monday' then 1 
        when DATENAME(WEEKDAY, end_date) = 'Tuesday' then 2 
        when DATENAME(WEEKDAY, end_date) = 'Wednesday' then 3 
        when DATENAME(WEEKDAY, end_date) = 'Thursday' then 4 
        when DATENAME(WEEKDAY, end_date) = 'Friday' then 5 
        when DATENAME(WEEKDAY, end_date) = 'Saturday' then 6 
        when DATENAME(WEEKDAY, end_date) = 'Sunday' then 7
        end asc`, {type:Sequelize.QueryTypes.SELECT})
        .then(result => {
            sequelize.query(`
            select ws.skillID as skill, avg(g.score * ws.score) as score
            from worldSkill ws, game g 
            where ws.worldId = g.worldId
            group by ws.skillId, ws.worldId 
            order by ws.skillId asc`, {type:Sequelize.QueryTypes.SELECT})
            .then(result2 => {
                sequelize.query(`
                select ws.skillID as skill, sum(g.score * ws.score) as score, p.gender
                from worldSkill ws, game g, player p, skill s
                where ws.worldId = g.worldId and p.nickname = g.playerNickname and s.id = ws.skillId
                group by ws.skillId, ws.worldId, p.gender, s.skill_name
                order by p.gender, skillId`, {type:Sequelize.QueryTypes.SELECT})
                .then(result3 => {
                    res.render('steamdata.html', {
                        tendency: result,
                        skills: result2,
                        genderSkills: result3
                    })
                })
            })
        })
    } else {
        res.redirect('/insider');
    }

};

