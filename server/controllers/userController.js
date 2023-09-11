const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const createNewUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await User.create({ ...req.body });
    res.status(201).json(user);
  } catch (err) {
    return next(err);
  }
};
const checkUserCredentials = () => {};

module.exports = { createNewUser, checkUserCredentials };
