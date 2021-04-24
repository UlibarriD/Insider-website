// Import Sequelize
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const Player = (sequelize => {
    sequelize.define('player', {
     // Table Attributes
        nickname: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i 
            }
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i 
            }
        },
        date_of_birth: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        gender: {
            type: Sequelize.STRING(1),
            allowNull: false,
            validate: {
                isIn: [['M', 'F', 'm', 'f']],
            }
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
            type: Sequelize.STRING(3),
            allowNull: false
        },
        steam: {
            type: Sequelize.STRING(3),
            defaultValue: "off",
            allowNull: false
        }        
    }, {
        instanceMethods: {
            generateHash: function (password) {
              return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
            },
            validPassword: function (password) {
              return bcrypt.compareSync(password, this.password)
            }
        }        
    })
});

module.exports = Player;
