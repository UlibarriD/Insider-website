// Import Sequelize
const Sequelize = require('sequelize');

const Game = (sequelize => {
    sequelize.define('game', {
        // Table attributes
        id_game: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement:true
        },
        begin_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false
        },
        end_date: {
            type: Sequelize.DATE,
            allowNull: true
        },
        score: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
})

module.exports = Game;