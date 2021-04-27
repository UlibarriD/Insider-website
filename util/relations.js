function applyRelations(sequelize){
    const Player = sequelize.models.player;
    const World = sequelize.models.world;
    const Skill = sequelize.models.skill;
    const Game = sequelize.models.game;
    const WorldSkill = sequelize.models.worldSkill;

    World.belongsToMany(Player, {through: {model: Game, unique: false}});
    Player.belongsToMany(World, {through: {model: Game, unique: false}});

    World.belongsToMany(Skill, {through: WorldSkill});
    Skill.belongsToMany(World, {through: WorldSkill});
}

module.exports = {applyRelations};