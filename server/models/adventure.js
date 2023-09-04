import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AdventureSchema = Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tripDate: { type: Date },

  //   user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  //
});

AuthorSchema.virtual("summary").get(function () {
  let summary = "";
  //   cant use an arrow function because im using 'this'
  if (this.title && this.tripDate) {
    summary = `The following adventure : {${this.title}}, will take place on : ${this.tripDate}`;
  }

  return summary;
});

module.exports = mongoose.model("Adventure", AdventureSchema);
