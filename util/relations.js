function applyRelations(sequelize){
    const Player = sequelize.models.player;
    const World = sequelize.models.world;
    const Skill = sequelize.models.skill;
    const Game = sequelize.models.game;
    const WorldSkill = sequelize.models.worldSkill;

    Player.belongsToMany(World, {through: Game});
    World.belongsToMany(Player, {through: Game});

    World.belongsToMany(Skill, {through: WorldSkill});
    Skill.belongsToMany(World, {through: WorldSkill});
}

module.exports = {applyRelations};