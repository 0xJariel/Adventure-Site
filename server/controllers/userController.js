const mongoose = require("mongoose");
const Adventure = require("../models/adventure");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const createNewUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    const result = await user.save();
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
};
const checkUserCredentials = () => {};

module.exports = { createNewUser, checkUserCredentials };
