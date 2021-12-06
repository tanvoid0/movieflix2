const express = require("express");
const router = express.Router();
const passport = require("passport");
const gameController = require("../controller/game.controller");

/*
  @route  GET /api/game/
  @desc   Get all game info
 */

router.get("/", gameController.listGames);

module.exports = router;
