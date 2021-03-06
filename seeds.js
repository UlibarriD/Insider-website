const Player = require("./util/database").models.player;
const World = require("./util/database").models.world;
const Skill = require("./util/database").models.skill;
const WorldSkill = require("./util/database").models.worldSkill;
const sequelize = require('./util/database');
const bcrypt = require('bcrypt');
// Deleting games, worldskills, worlds, skills, players
sequelize.sync({ force: true })
    .then(result => {
        // Creating Worlds
        World.create({area: 'Ciencia'});
        World.create({area: 'Tecnología'});
        World.create({area: 'Ingeniería'});
        World.create({area: 'Arte'});
        World.create({area: 'Matemáticas'});
        // Creating Skills
        Skill.create({skill_name: 'Deducción'});
        Skill.create({skill_name: 'Memoria'});
        Skill.create({skill_name: 'Pensamiento Creativo'});
        Skill.create({skill_name: 'Atención'});
        Skill.create({skill_name: 'Coordinación'});
        Skill.create({skill_name: 'Agilidad Mental'});
        Skill.create({skill_name: 'Razonamiento lógico matemático'});
        Skill.create({skill_name: 'Razonamiento Abstracto'});
        Skill.create({skill_name: 'Resolución numérica'});
        // Creating worldSkills
        WorldSkill.create({worldId: 5, skillId: 6, score: 0.6});
        WorldSkill.create({worldId: 5, skillId: 7, score: 0.4});
        WorldSkill.create({worldId: 4, skillId: 4, score: 0.5});
        WorldSkill.create({worldId: 4, skillId: 5, score: 0.5});
        WorldSkill.create({worldId: 3, skillId: 8, score: 0.5});
        WorldSkill.create({worldId: 3, skillId: 9, score: 0.5});
        WorldSkill.create({worldId: 2, skillId: 1, score: 1});
        WorldSkill.create({worldId: 1, skillId: 2, score: 0.7});
        WorldSkill.create({worldId: 1, skillId: 3, score: 0.3});
        // Creating players
        const Diego = new Player({name: 'Diego', last_name: 'Ulibarri', nickname: 'Squarish', date_of_birth: '2000-06-06', gender: 'M', state: 'Hidalgo', password: 'st1234', page_policies: 'on', steam: 'on'});
        const Fernanda = new Player({name: 'Fernanda', last_name: 'Ramírez', nickname: 'Fernanda1a1a', date_of_birth: '2001-05-20', gender: 'F', state: 'Estado de México', password: 'st1234', page_policies: 'on', steam: 'on'});
        const Joe = new Player({name: 'Youthan', last_name: 'Irigoyen', nickname: 'FazeYouthan', date_of_birth: '2000-06-18', gender: 'M', state: 'Estado de México', password: 'st1234', page_policies: 'on', steam: 'on'});
        const Rivers = new Player({name: 'Emilio', last_name: 'Rios', nickname: 'BloodyEmily', date_of_birth: '2001-07-28', gender: 'M', state: 'Estado de México', password: 'st1234', page_policies: 'on', steam: 'on'});
        const Carlitos = new Player({name: 'Carlos', last_name: 'Toapanta', nickname: 'Carlitoustoe', date_of_birth: '2001-07-24', gender: 'M', state: 'Estado de México', password: 'st1234', page_policies: 'on', steam: 'on'});
        const STEAM = new Player({name: 'Movimiento', last_name: 'STEAM', nickname: 'STEAM', date_of_birth: '2000-01-01', gender: 'F', state: 'Estado de México', password: 'st1234', page_policies: 'on', steam: 'on'});
        bcrypt.genSalt(10,(err,salt) => bcrypt.hash(Joe.password,salt, (err,hash)=> {
            if(err) throw err;
            Joe.password = hash;
            Diego.password = hash;
            Fernanda.password = hash;
            Rivers.password = hash;
            Carlitos.password = hash;
            STEAM.password = hash;
            Diego.save();
            Fernanda.save();
            Joe.save();
            Rivers.save();
            Carlitos.save();
            STEAM.save();
        }));
    })
    .catch(error => console.log(error))
 