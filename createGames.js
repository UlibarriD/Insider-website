const sequelize = require('./util/database');
const Game = require("./util/database").models.game;
sequelize.sync({ force: false })
    .then(result => {
        // No borrar linea 5 - 35
        Game.create({ playerNickname: 'Squarish', worldId: 1, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'Squarish', worldId: 2, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'Squarish', worldId: 3, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'Squarish', worldId: 4, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'Squarish', worldId: 5, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 1, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 2, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 3, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 4, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 5, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 1, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 2, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 3, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 4, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 5, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'bloodyemily', worldId: 1, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'bloodyemily', worldId: 2, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'bloodyemily', worldId: 3, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'bloodyemily', worldId: 4, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'bloodyemily', worldId: 5, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'carlitoustoe', worldId: 1, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'carlitoustoe', worldId: 2, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'carlitoustoe', worldId: 3, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'carlitoustoe', worldId: 4, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'carlitoustoe', worldId: 5, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'STEAM', worldId: 1, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'STEAM', worldId: 1, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'STEAM', worldId: 1, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'STEAM', worldId: 1, end_date: '2021-04-27', score: 0});
        Game.create({ playerNickname: 'STEAM', worldId: 1, end_date: '2021-04-27', score: 0});

        // Se puede borrar
        // Science games
        Game.create({ playerNickname: 'Squarish', worldId: 1, end_date: '2021-04-26', score: 3000}); 
        Game.create({ playerNickname: 'Squarish', worldId: 1, end_date: '2021-04-26', score: 2470});
        Game.create({ playerNickname: 'Squarish', worldId: 1, end_date: '2021-04-27', score: 2000});
        Game.create({ playerNickname: 'Squarish', worldId: 1, end_date: '2021-04-27', score: 3800});
        Game.create({ playerNickname: 'Squarish', worldId: 1, end_date: '2021-04-27', score: 4010});
        Game.create({ playerNickname: 'Squarish', worldId: 1, end_date: '2021-04-28', score: 2570});
        Game.create({ playerNickname: 'Squarish', worldId: 1, end_date: '2021-04-29', score: 3485});
        Game.create({ playerNickname: 'Squarish', worldId: 1, end_date: '2021-04-30', score: 2980});
        Game.create({ playerNickname: 'Squarish', worldId: 1, end_date: '2021-05-01', score: 4910}); 
        Game.create({ playerNickname: 'Squarish', worldId: 1, end_date: '2021-05-02', score: 1220});

        Game.create({ playerNickname: 'Squarish', worldId: 1, end_date: '2021-04-13', score: 3810});
        Game.create({ playerNickname: 'Squarish', worldId: 1, end_date: '2021-04-20', score: 4210});
        Game.create({ playerNickname: 'Squarish', worldId: 1, end_date: '2021-04-24', score: 6810});
        Game.create({ playerNickname: 'Squarish', worldId: 1, end_date: '2021-04-15', score: 3222});
        // Technology game
        Game.create({ playerNickname: 'Squarish', worldId: 2, end_date: '2021-04-26', score: 6750});
        Game.create({ playerNickname: 'Squarish', worldId: 2, end_date: '2021-04-30', score: 8813});
        Game.create({ playerNickname: 'Squarish', worldId: 2, end_date: '2021-04-27', score: 4689});
        Game.create({ playerNickname: 'Squarish', worldId: 2, end_date: '2021-04-28', score: 5592});
        Game.create({ playerNickname: 'Squarish', worldId: 2, end_date: '2021-04-30', score: 3678});
        Game.create({ playerNickname: 'Squarish', worldId: 2, end_date: '2021-04-01', score: 5614});
        Game.create({ playerNickname: 'Squarish', worldId: 2, end_date: '2021-04-30', score: 2583});
        Game.create({ playerNickname: 'Squarish', worldId: 2, end_date: '2021-04-30', score: 3239});
        Game.create({ playerNickname: 'Squarish', worldId: 2, end_date: '2021-05-01', score: 5207});
        Game.create({ playerNickname: 'Squarish', worldId: 2, end_date: '2021-05-02', score: 3403});
        // Engeneering game
        Game.create({ playerNickname: 'Squarish', worldId: 3, end_date: '2021-04-26', score: 3732});
        Game.create({ playerNickname: 'Squarish', worldId: 3, end_date: '2021-04-26', score: 4806});
        Game.create({ playerNickname: 'Squarish', worldId: 3, end_date: '2021-04-27', score: 3877});
        Game.create({ playerNickname: 'Squarish', worldId: 3, end_date: '2021-04-28', score: 2131});
        Game.create({ playerNickname: 'Squarish', worldId: 3, end_date: '2021-04-28', score: 2216});
        Game.create({ playerNickname: 'Squarish', worldId: 3, end_date: '2021-04-28', score: 4084});
        Game.create({ playerNickname: 'Squarish', worldId: 3, end_date: '2021-04-29', score: 2454});
        Game.create({ playerNickname: 'Squarish', worldId: 3, end_date: '2021-04-30', score: 4455});
        Game.create({ playerNickname: 'Squarish', worldId: 3, end_date: '2021-05-01', score: 2489});
        Game.create({ playerNickname: 'Squarish', worldId: 3, end_date: '2021-05-02', score: 4299});
        // Art game
        Game.create({ playerNickname: 'Squarish', worldId: 4, end_date: '2021-04-26', score: 3328});
        Game.create({ playerNickname: 'Squarish', worldId: 4, end_date: '2021-04-26', score: 3586});
        Game.create({ playerNickname: 'Squarish', worldId: 4, end_date: '2021-04-27', score: 5160});
        Game.create({ playerNickname: 'Squarish', worldId: 4, end_date: '2021-04-28', score: 3492});
        Game.create({ playerNickname: 'Squarish', worldId: 4, end_date: '2021-04-28', score: 2806});
        Game.create({ playerNickname: 'Squarish', worldId: 4, end_date: '2021-04-28', score: 2159});
        Game.create({ playerNickname: 'Squarish', worldId: 4, end_date: '2021-04-29', score: 3226});
        Game.create({ playerNickname: 'Squarish', worldId: 4, end_date: '2021-04-30', score: 4899});
        Game.create({ playerNickname: 'Squarish', worldId: 4, end_date: '2021-05-01', score: 3332});
        Game.create({ playerNickname: 'Squarish', worldId: 4, end_date: '2021-05-02', score: 4548});
        Game.create({ playerNickname: 'Squarish', worldId: 4, end_date: '2021-05-02', score: 3100});
        Game.create({ playerNickname: 'Squarish', worldId: 4, end_date: '2021-05-02', score: 2200});
        Game.create({ playerNickname: 'Squarish', worldId: 4, end_date: '2021-05-02', score: 1000});
        // Math game
        Game.create({ playerNickname: 'Squarish', worldId: 5, end_date: '2021-04-26', score: 5052});
        Game.create({ playerNickname: 'Squarish', worldId: 5, end_date: '2021-04-26', score: 3034});
        Game.create({ playerNickname: 'Squarish', worldId: 5, end_date: '2021-04-27', score: 3969});
        Game.create({ playerNickname: 'Squarish', worldId: 5, end_date: '2021-04-27', score: 2100});
        Game.create({ playerNickname: 'Squarish', worldId: 5, end_date: '2021-04-27', score: 3120});
        Game.create({ playerNickname: 'Squarish', worldId: 5, end_date: '2021-04-28', score: 5028});
        Game.create({ playerNickname: 'Squarish', worldId: 5, end_date: '2021-04-28', score: 2994});
        Game.create({ playerNickname: 'Squarish', worldId: 5, end_date: '2021-04-28', score: 3939});
        Game.create({ playerNickname: 'Squarish', worldId: 5, end_date: '2021-04-29', score: 5450});
        Game.create({ playerNickname: 'Squarish', worldId: 5, end_date: '2021-04-30', score: 3777});
        Game.create({ playerNickname: 'Squarish', worldId: 5, end_date: '2021-05-01', score: 3554});
        Game.create({ playerNickname: 'Squarish', worldId: 5, end_date: '2021-05-01', score: 1001});
        Game.create({ playerNickname: 'Squarish', worldId: 5, end_date: '2021-05-01', score: 2020});
        Game.create({ playerNickname: 'Squarish', worldId: 5, end_date: '2021-05-02', score: 5679});
        // Fernanda 
        // Science games
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 1, end_date: '2021-04-26', score: 5429});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 1, end_date: '2021-04-26', score: 2866});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 1, end_date: '2021-04-27', score: 5279});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 1, end_date: '2021-04-28', score: 4507});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 1, end_date: '2021-04-28', score: 3659});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 1, end_date: '2021-04-28', score: 3435});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 1, end_date: '2021-04-29', score: 5723});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 1, end_date: '2021-04-30', score: 5765});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 1, end_date: '2021-05-01', score: 5685});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 1, end_date: '2021-05-02', score: 2575});
        // Technology game
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 2, end_date: '2021-04-26', score: 1561});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 2, end_date: '2021-04-26', score: 5762});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 2, end_date: '2021-04-27', score: 3227});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 2, end_date: '2021-04-28', score: 2645});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 2, end_date: '2021-04-28', score: 1502});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 2, end_date: '2021-04-28', score: 1851});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 2, end_date: '2021-04-29', score: 2545});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 2, end_date: '2021-04-30', score: 3418});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 2, end_date: '2021-05-01', score: 3265});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 2, end_date: '2021-05-02', score: 1650});
        // Engeneering game
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 3, end_date: '2021-04-26', score: 4429});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 3, end_date: '2021-04-26', score: 6189});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 3, end_date: '2021-04-27', score: 5353});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 3, end_date: '2021-04-28', score: 5933});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 3, end_date: '2021-04-28', score: 4852});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 3, end_date: '2021-04-28', score: 3222});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 3, end_date: '2021-04-29', score: 5064});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 3, end_date: '2021-04-30', score: 2640});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 3, end_date: '2021-05-01', score: 3866});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 3, end_date: '2021-05-02', score: 6020});
        // Art game
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 4, end_date: '2021-04-26', score: 2386});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 4, end_date: '2021-04-26', score: 3586});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 4, end_date: '2021-04-27', score: 2222});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 4, end_date: '2021-04-27', score: 4789});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 4, end_date: '2021-04-28', score: 2585});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 4, end_date: '2021-04-28', score: 5984});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 4, end_date: '2021-04-28', score: 1876});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 4, end_date: '2021-04-29', score: 5615});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 4, end_date: '2021-04-29', score: 1099});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 4, end_date: '2021-04-29', score: 890});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 4, end_date: '2021-04-30', score: 4377});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 4, end_date: '2021-05-01', score: 4189});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 4, end_date: '2021-05-02', score: 2273});
        // Math game
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 5, end_date: '2021-04-26', score: 4847});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 5, end_date: '2021-04-26', score: 4085});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 5, end_date: '2021-04-27', score: 4255});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 5, end_date: '2021-04-28', score: 5445});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 5, end_date: '2021-04-28', score: 4890});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 5, end_date: '2021-04-28', score: 4008});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 5, end_date: '2021-04-29', score: 3856});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 5, end_date: '2021-04-30', score: 2613});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 5, end_date: '2021-05-01', score: 5174});
        Game.create({ playerNickname: 'fernanda1a1a', worldId: 5, end_date: '2021-05-02', score: 2790});

        // Joe 
        // Science games
        Game.create({ playerNickname: 'fazeyouthan', worldId: 1, end_date: '2021-04-26', score: 5229});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 1, end_date: '2021-04-26', score: 4789});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 1, end_date: '2021-04-27', score: 1810});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 1, end_date: '2021-04-28', score: 4257});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 1, end_date: '2021-04-28', score: 2642});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 1, end_date: '2021-04-28', score: 4121});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 1, end_date: '2021-04-29', score: 4240});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 1, end_date: '2021-04-30', score: 3916});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 1, end_date: '2021-05-01', score: 1541});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 1, end_date: '2021-05-02', score: 4357});
        // Technology game
        Game.create({ playerNickname: 'fazeyouthan', worldId: 2, end_date: '2021-04-26', score: 5300});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 2, end_date: '2021-04-26', score: 4701});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 2, end_date: '2021-04-27', score: 5799});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 2, end_date: '2021-04-28', score: 4050});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 2, end_date: '2021-04-28', score: 3287});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 2, end_date: '2021-04-28', score: 5625});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 2, end_date: '2021-04-29', score: 2610});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 2, end_date: '2021-04-30', score: 5239});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 2, end_date: '2021-05-01', score: 4206});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 2, end_date: '2021-05-02', score: 5614});
        // Engeneering game
        Game.create({ playerNickname: 'fazeyouthan', worldId: 3, end_date: '2021-04-26', score: 5283});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 3, end_date: '2021-04-26', score: 2286});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 3, end_date: '2021-04-27', score: 2067});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 3, end_date: '2021-04-28', score: 2243});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 3, end_date: '2021-04-28', score: 2207});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 3, end_date: '2021-04-28', score: 2951});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 3, end_date: '2021-04-29', score: 5345});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 3, end_date: '2021-04-30', score: 3493});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 3, end_date: '2021-05-01', score: 6267});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 3, end_date: '2021-05-02', score: 6078});
        // Art game
        Game.create({ playerNickname: 'fazeyouthan', worldId: 4, end_date: '2021-04-26', score: 5563});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 4, end_date: '2021-04-26', score: 3603});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 4, end_date: '2021-04-27', score: 5442});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 4, end_date: '2021-04-28', score: 2024});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 4, end_date: '2021-04-28', score: 1700});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 4, end_date: '2021-04-28', score: 1608});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 4, end_date: '2021-04-29', score: 5615});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 4, end_date: '2021-04-30', score: 3205});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 4, end_date: '2021-05-01', score: 3494});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 4, end_date: '2021-05-02', score: 1523});
        // Math game
        Game.create({ playerNickname: 'fazeyouthan', worldId: 5, end_date: '2021-04-26', score: 2327});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 5, end_date: '2021-04-26', score: 1884});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 5, end_date: '2021-04-27', score: 2597});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 5, end_date: '2021-04-28', score: 2250});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 5, end_date: '2021-04-28', score: 2280});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 5, end_date: '2021-04-28', score: 1505});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 5, end_date: '2021-04-29', score: 1812});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 5, end_date: '2021-04-30', score: 2749});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 5, end_date: '2021-05-01', score: 3395});
        Game.create({ playerNickname: 'fazeyouthan', worldId: 5, end_date: '2021-05-02', score: 2408});
    })