// Import Sequelize
const Sequelize = require('sequelize');

const WorldSkill = (sequelize => {
    sequelize.define('worldSkill', {
        // Table attributes
        score: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
})

module.exports = WorldSkill;
