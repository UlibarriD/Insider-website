// Sequelize Configuration
const Sequelize = require('sequelize');
const sequelize = new Sequelize('aplicacion', 'sa', 'Password1234$', {
    dialect: 'mssql',
    dialectOptions:{
        options:{
            useUTC: false,
            dateFirst: 1
        }
    },
    define:{
        timestamps: false,      // Don't add timestamps to tables.
        freezeTableName: true   // Don't modifie table names.
    }
});

module.exports = sequelize;
