const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },

  eventName: { type: String },
  date: { type: Date },
  time: { type: String },
  speaker: { type: String },
  headcount: { type: Number },
  description: { type: String },
  bill: { type: Number },
  mettingLink: { type: String },

  isPublic: { type: Boolean },
  isPaid: { type: Boolean },
  payableAmount: { type: Number },

  eventType: { type: String },
  city: { type: String },
  hallName: { type: String },
  hallBookingTime: { type: String },
  platform: { type: String },
  isVanueConfirmed: { type: Boolean, default: false },

  tillNowTotalRegistration: { type: Number, default: 0 },
  lastDateOfRegistration: { type: Date },

  registeredUser: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],

  interested: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],

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
