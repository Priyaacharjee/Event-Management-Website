// *user-model.js*
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  contact: Number,
  createdEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "event" }],
  appliedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "event" }],
  pastEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "event" }],
});

module.exports = mongoose.model("user", userSchema);


