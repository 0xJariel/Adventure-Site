const express = require("express");
const router = express.Router();
const Adventure = require("../models/adventure");
const {
  getAllAdventures,
  getAdventure,
  createAdventure,
  updateAdventure,
  deleteAdventure,
} = require("../controllers/adventureController");

// GET all adventures
router.get("/", getAllAdventures);

// GET adventure by id
router.get("/:id", getAdventure);

// POST new adventure
router.post("/new", createAdventure);

// GET new adventure
router.get("/new");

// DELETE post by id
router.delete("/:id", deleteAdventure);

// PATCH post by id
router.patch("/:id", updateAdventure);

module.exports = router;
