const express = require("express");
const router = express.Router();
const {
  getAllAdventures,
  getAdventuresByCategory,
} = require("../controllers/categoryController");

// GET all adventures
router.get("/", getAllAdventures);

// GET adventures by category
router.get("/:category", getAdventuresByCategory);

module.exports = router;
