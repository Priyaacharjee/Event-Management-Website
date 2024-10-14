const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB_URI;

mongoose
  .connect(`${mongoUri}`, { dbName: "event_management" })
  .then(() => {
    console.log("Server is running");
  })
  .catch((err) => {
    console.log(err.message);
  });

module.exports = mongoose.connection;
