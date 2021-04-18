// Import Sequelize
const Sequelize = require('sequelize');

const Game = (sequelize => {
    sequelize.define('game', {
        // Table attributes
        id_game: {
            type: Sequelize.INTEGER,
            prymaryKey: true,
            allowNull: false
        },
        begin_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false
        },
        end_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        score: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
})

module.exports = Game;