const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  organizedBy: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  speaker: { type: String, required: true },
  eventType: { type: String, required: true },
  city: { type: String },
  platform: { type: String },
  isPublic: { type: Boolean, required: true },
  isPaid: { type: Boolean, required: true },
  payableAmount: { type: Number },
  headcount: { type: Number, required: true },
  description: { type: String, required: true },
  lastDateOfRegistration: { type: Date },
  // rulesFile: { type: String },
  // posterImage: { type: String , required: true},
});


module.exports = mongoose.model("event", eventSchema);
