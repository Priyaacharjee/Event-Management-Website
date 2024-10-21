const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  eventName: { type: String },
  date: { type: Date },
  time: { type: String },
  speaker: { type: String },
  eventType: { type: String },
  city: { type: String },
  platform: { type: String },
  isPublic: { type: Boolean },
  isPaid: { type: Boolean },
  payableAmount: { type: Number },
  headcount: { type: Number },
  tillNowTotalRegistration: { type: Number, default: 0 },
  description: { type: String },
  bill: { type: Number },
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
