const express = require("express");
const router = express.Router();
const {
  createNewUser,
  checkUserCredentials,
} = require("../controllers/userController");

router.post("/signup", createNewUser);
router.post("/login", checkUserCredentials);

module.exports = router;
