// *event-model.js*
const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  name: String,
  date: Date,
  time: String,
  description: String,
  poster: String,
});

module.exports = mongoose.model("event", eventSchema);
