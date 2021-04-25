const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const Player = require("../util/database").models.player;

function initialize(passport) {
    const authenticateUser = (nickname, password, done) => {
        Player.findOne({
            where: {
                nickname: nickname
            }
        })
        .then((player) =>{
            if(!player) {
                console.log("el usuario no existe");
                return done(null, false, {message : 'el usuario no existe'});
            }
            // match pass
            bcrypt.compare(password, player.password, (err, isMatch) => {
                if (err) throw err;
                if(isMatch){
                    return done(null, player);
                } else {
                    console.log("Contraseña incorrecta");
                    return done(null, false, {message: 'Contraseña incorrecta'})
                }
            })
        })
        .catch((err) => console.log(err))
    }

    passport.use(new localStrategy({usernameField: 'nickname'}, authenticateUser));

    passport.serializeUser((player, done) => {
        done(null, player.nickname);
    });
    passport.deserializeUser((nickname, done) => {
        Player.findOne({
            where: {
                nickname: nickname
            }
        })
        .then((player) => {
            return done(null, player);
        })
    });
}

module.exports = initialize
