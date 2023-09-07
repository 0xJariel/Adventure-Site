const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    enum: ["Backpacking", "Hiking", "Rafting", "Ski Touring"],
    required: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
