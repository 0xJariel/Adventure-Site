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
    const adventures = await Adventure.find({});
    res.status(200).json(adventures);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = { getAllAdventures, getAdventuresByCategory };
