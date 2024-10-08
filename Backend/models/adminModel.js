const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("admin", adminSchema);
