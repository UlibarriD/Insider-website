// Import librarys
const express = require("express");
const router = express.Router();
const gameController = require("../controllers/game")

// Create
router.post('/newGame', gameController.postNewGame);
