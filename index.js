// Import path (library to create routes), body-parser (library to handle JSON), express library
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
// Passport config
const passport = require('passport');
const session = require('express-session');
require("./util/passport-config")(passport);
// Import Sequelize from util
const sequelize = require("./util/database.js");
//Import routes
const playerRoutes = require("./routes/player.js");
// Create Server
const app = express();
// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize())
app.use(passport.session())

// EJS template configuration
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
// Server configuration
app.use('/insider', playerRoutes);

app.get('/insider', (req, res) => {

    res.render('LandingPage.html')
});
app.get('/insider/tutoriales', (req, res) => {
    res.render('tutorials.html')
});
app.get('/insider/download', (req, res) => {
    res.download(path.join(__dirname, 'public', 'resources', 'test.txt'));
});

// Attend requests
sequelize.sync()
    .then(result => {
        console.log("Conexion exitosa");
        app.listen(8080, ()=> console.log("Online server on port 8080"));
    })
    .catch(error => console.log(error))