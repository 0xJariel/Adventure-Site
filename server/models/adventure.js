const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdventureSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tripDate: { type: Date },
    // todo: get categories from another schema
    category: {
      type: String,
      enum: ["Backpacking", "Hiking", "Rafting", "Ski Touring"],
      required: true,
    },
    file: {
      // name: String,
      data: Buffer, // Store binary image data
      contentType: String, // (e.g., 'image/jpeg')
    },
  },

  { timestamps: true }
);

AdventureSchema.virtual("summary").get(function () {
  let summary = "";
  //   cant use an arrow function because im using 'this'
  if (this.title && this.tripDate) {
    summary = `The following adventure : {${this.title}}, will take place on : ${this.tripDate}`;
  }

  return summary;
});

module.exports = mongoose.model("Adventure", AdventureSchema);
