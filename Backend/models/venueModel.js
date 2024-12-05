// *venue-model.js*
const mongoose = require("mongoose");

const venueSchema = new mongoose.Schema({
  name: String,
  email: String,
  temporaryPassword: String,
  password: String,
  contact: String,

  address: String,
  city: String,

  maxCapacity: Number,
  bookingPrice: Number,
  openingtime: String,
  closingtime: String,
  noOfSlot: Number,
  timeDivisionOfSlot: [String],

  acceptedByAdmin: { type: Boolean, default: false },

  images: [
    {
      public_id: {
        type: String,
        required: false,
      },
      url: {
        type: String,
        required: false,
      },
    },
  ],

  isCompleteProfile: {
    type: Boolean,
    default: false,
  },

  bookedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "event" }],

  bookingDates: {
    type: [Date],
  },

  bookingShifts: {
    type: [String],
  },
});

module.exports = mongoose.model("venue", venueSchema);
