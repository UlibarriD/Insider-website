// Import Sequelize
const Sequelize = require('sequelize');

const Skill = (sequelize => {
    sequelize.define('skill', {
        // Table attributes
        skill_name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
})

module.exports = Skill;
