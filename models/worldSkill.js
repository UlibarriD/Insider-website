// Import Sequelize
const Sequelize = require('sequelize');

const WorldSkill = (sequelize => {
    sequelize.define('worldSkill', {
        // Table attributes
        score: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    })
})

module.exports = WorldSkill;
