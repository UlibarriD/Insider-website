// Import path (library to create routes)
const path = require('path');
// Import body-parser (library to handle JSON)
const bodyParser = require('body-parser');
// Import express library
const express = require('express');
// Import Sequelize from util
const sequelize = require("./util/database.js");
//Import models
const Player = require("./models/player.js");
//Import routes
const playerRoutes = require("./routes/player.js")
// Create Server
const app = express();
// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// EJS template configuration
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
// Server configuration
app.use('/insider', playerRoutes);

// GET
app.get('/insider', (req, res) => {
    res.render('LandingPage.html')
});

// Attend requests
sequelize.sync()
    .then(result => {
        console.log("Conexion exitosa");
        app.listen(8080, ()=> console.log("Online server on port 8080"));
    })
    .catch(error => console.log(error))