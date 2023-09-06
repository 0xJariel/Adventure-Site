// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");
const Adventure = require("../models/adventureModel");

// removes need to have try/catch methods: exceptions vs error handling
// didnt want to use this wrapper
// const asyncHandler = require("express-async-handler");

// exports.index = asyncHandler(async (req, res, next) => {
//   // Get details of adventures, adventure instances, authors and genre counts (in parallel)
//   const [numAdventures] = await Promise.all([
//     Adventure.countDocuments({}).exec(),
//   ]);

//   res.render("index", {
//     title: "Adventure Time",
//     num: numAdventures,
//   });
// });

// Get all adventures.
const getAllAdventures = async (req, res, next) => {
  try {
    const adventures = await Adventure.find({});
    res.status(200).json(adventures);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// Get a single adventure.
const getAdventure = async (req, res, next) => {
  const { id } = req.params;

  // check if its a valid mongoose id type
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "No such id found" });
  }

  const adventure = Adventure.findById({ id });

  // if an error or exception is thrown
  if (!adventure) {
    res.status(400).json({ error: "No such id found" });
  }

  // if valid object
  res.status(200).json(adventure);
};

// POST an adventure
const createAdventure = async (req, res, next) => {
  const { title, description, tripDate } = req.body;
  try {
    const adventure = await Adventure.create({ title, description, tripDate });
    res.status(200).json(adventure);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE an adventure
const deleteAdventure = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "No such id found" });
  }
};

// PATCH an adventure
const updateAdventure = async (req, res, next) => {
  const { id } = req.params;

  // check for non empty fields
  const fieldsToUpdate = { ...req.body };
  console.log(req.body);

  // add all non empty fields to the new opbject

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "No such id found" });
  }

  const adventure = await Adventure.findByIdAndUpdate({ id }, { ...req.body });
};

module.exports = {
  getAllAdventures,
  getAdventure,
  createAdventure,
  deleteAdventure,
  updateAdventure,
};
