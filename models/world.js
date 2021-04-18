// Import Sequelize
const Sequelize = require('sequelize');

const World = (sequelize => {
    sequelize.define('world', {
        // Table attributes
        area: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
})

module.exports = World;
