// Import Sequelize
const Sequelize = require('sequelize');
// Import Sequelize from util
const sequelize = require("../util/database.js");

const Player = sequelize.define('players', {
    // Table Attributes
    nickname: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date_of_birth: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING(1),
        allowNull: false
    },
    area:{
        type: Sequelize.STRING,
        allowNull: false
    },
    state:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    page_policies:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Player;
