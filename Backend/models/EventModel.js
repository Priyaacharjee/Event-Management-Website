const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  eventName: { type: String, required: true },
  // organizedBy: { type: String, required: true },
  // email: { type: String, required: true },
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
  posterImage: {
    public_id: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
  },
  scannerImage: {
    public_id: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
  },
});

module.exports = mongoose.model("event", eventSchema);
