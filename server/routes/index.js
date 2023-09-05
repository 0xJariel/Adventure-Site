var express = require("express");
const { adventure_list } = require("../controllers/adventureController");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // console.log("first");
  // adventure_list(req, res, next);
  res.render("index", { title: "Welcome to Adventure Time" });
});

module.exports = router;
