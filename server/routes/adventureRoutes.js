const express = require("express");
const router = express.Router();
const Adventure = require("../models/adventure");
const {
  getAllAdventures,
  getAdventure,
  createAdventure,
  patchAdventure,
  deleteAdventure,
} = require("../controllers/adventureController");

// get all adventures
router.get("/", getAllAdventures);

module.exports = router;
