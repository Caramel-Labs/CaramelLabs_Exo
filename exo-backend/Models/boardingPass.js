const mongoose = require("mongoose");

const boardingPassSchema = new mongoose.Schema({
  tripDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "trips",
  },
  bookingDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "bookings",
  },
});

boardingPassSchema.set("strictPopulate", false);

const boardingPassModel = mongoose.model("boardingPasses", boardingPassSchema);

module.exports = { boardingPassModel };
