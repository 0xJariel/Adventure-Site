var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var hbs = require("hbs");
require("dotenv").config();
const mongoDBURL = process.env.mongoDBURL;

const indexRouter = require("./routes/index");
const adventureRouter = require("./routes/adventureRoutes");
const categoryRouter = require("./routes/categoryRoutes");

var app = express();

// Allow for hbs partials
hbs.registerPartials(path.join(__dirname, "/views/partials"));

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
async function main() {
  await mongoose.connect(mongoDBURL);
  console.log(
    `Connected to the Adventure-Time database & running on port ${process.env.PORT} :)`
  );
}
main().catch((err) => console.log(err));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/adventures/", adventureRouter);
app.use("/api/category/", categoryRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
