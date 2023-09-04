const Adventure = require("./model/adventure");

// removes need to have try/catch methods: exceptions vs error handling
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  // Get details of adventures, adventure instances, authors and genre counts (in parallel)
  const [numAdventures] = await Promise.all([
    Adventure.countDocuments({}).exec(),
  ]);

  res.render("index", {
    title: "Adventure Time",
  });
});

// Display list of all adventures.
exports.adventure_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: adventure list");
});

// Display detail page for a specific adventure.
exports.adventure_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: adventure detail: ${req.params.id}`);
});

// Display adventure create form on GET.
exports.adventure_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: adventure create GET");
});

// Handle adventure create on POST.
exports.adventure_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: adventure create POST");
});

// Display adventure delete form on GET.
exports.adventure_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: adventure delete GET");
});

// Handle adventure delete on POST.
exports.adventure_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: adventure delete POST");
});

// Display adventure update form on GET.
exports.adventure_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: adventure update GET");
});

// Handle adventure update on POST.
exports.adventure_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: adventure update POST");
});
