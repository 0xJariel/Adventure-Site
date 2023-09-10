const express = require("express");
const router = express.Router();
const Adventure = require("../models/adventure");
const multer = require("multer");
const upload = multer(); // Create a Multer instance

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

// POST new adventure :: revise...
router.post("/new", upload.single("file"), createAdventure);

// GET new adventure
// could use this with hbs to return a static form page
router.get("/new");

// DELETE post by id
router.delete("/:id", deleteAdventure);

// PATCH post by id
router.patch("/:id", updateAdventure);

module.exports = router;
