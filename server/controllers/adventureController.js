// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");
const Adventure = require("../models/adventure");

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

  const adventure = await Adventure.findById(id);

  // if an error or exception is thrown
  if (!adventure) {
    res.status(400).json({ error: "No such id found" });
  }

  res.status(200).json(adventure);

  // if valid object
  res.status(200).json(adventure);
};

// POST an adventure
// Your createAdventure route
// the advantage here of using a class (new Adventure)
const createAdventure = async (req, res, next) => {
  try {
    const { title, description, tripDate, category } = req.body;
    const { originalname, mimetype, buffer } = req.file;

    // Create the Adventure document directly with Adventure.create()
    const adventure = await Adventure.create({
      title,
      description,
      tripDate,
      category,
      file: {
        name: originalname,
        data: buffer,
        contentType: mimetype,
      },
    });

    console.log(
      `The following adventure has been created and saved: ${adventure}`
    );
    res.status(200).json(adventure);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

// DELETE an adventure
const deleteAdventure = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "No such id found" });
  }

  try {
    const adventure = await Adventure.findByIdAndRemove(id);

    if (!adventure) {
      res.status(400).json({ error: "Adventure not found" });
    }

    res.status(200).json(adventure);
  } catch (error) {
    console.log(error);
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

  try {
    const adventure = await Adventure.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    if (!adventure) {
      return res.status(404).json({ error: "Adventure not found" });
    }

    return res.status(200).json(adventure);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllAdventures,
  getAdventure,
  createAdventure,
  deleteAdventure,
  updateAdventure,
};
