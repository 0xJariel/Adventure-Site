const mongoose = require("mongoose");
const Adventure = require("../models/adventure");

// duplicate > unsure of best convention when working with same data different route
const getAllAdventures = async (req, res, next) => {
  try {
    const adventures = await Adventure.find({});
    res.status(200).json(adventures);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const getAdventuresByCategory = async (req, res, next) => {
  const { category } = req.params;
  console.log(category);
  try {
    const adventures = await Adventure.find({ category: category });

    if (adventures.length === 0) {
      return res
        .status(404)
        .json({ error: `No adventures found with the category: ${category}` });
    }

    res.status(200).json(adventures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getAllAdventures, getAdventuresByCategory };

// used return for the response because >
// "Headers Already Sent" Error: In some cases, if you try to send multiple responses in a single request handler without returning early, you might encounter a "Headers Already Sent" error. Returning after sending a response ensures that no further operations are attempted after sending the response.
