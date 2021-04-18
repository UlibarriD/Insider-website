// Sequelize Configuration
const Sequelize = require('sequelize');
const {applyRelations} = require('./relations')

const sequelize = new Sequelize('insider', 'sa', 'Password1234$', {
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

// MODEL REFERENCES
const modelDefiners = [
    require('../models/player'),
    require('../models/world'),
    require('../models/skill'),
    require('../models/game'),
    require('../models/worldSkill'),
];

for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

// MAKE THE RELATION IN THE DB
applyRelations(sequelize);


module.exports = sequelize;
