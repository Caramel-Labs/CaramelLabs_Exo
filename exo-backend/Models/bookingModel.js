const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  spaceship: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "spaceships",
  },
  trip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "trips",
  },
  participants: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  status: String,
  class: String,
  tripType: String,
  veg: Boolean,
  price: Number,
  seats: [String],
});

bookingSchema.set("strictPopulate", false);

const bookingModel = mongoose.model("bookings", bookingSchema);

module.exports = { bookingModel };
