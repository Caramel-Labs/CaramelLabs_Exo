const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  tripName: String,
  description: String,
  passengers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  spaceship: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "spaceships",
  },
  arrival: {
    date: Date,
    planet: String,
    location: String,
    terminal: String,
  },
  departure: {
    date: Date,
    planet: String,
    location: String,
    terminal: String,
  },
  cosmoCruiser: {
    ticketPrice: Number,
    accomodationPrice: Number,
    foodAndBeveragePrice: Number,
    miscellaneousPrice: Number,
  },
  orionLux: {
    ticketPrice: Number,
    accomodationPrice: Number,
    foodAndBeveragePrice: Number,
    miscellaneousPrice: Number,
  },
  astroHop: {
    ticketPrice: Number,
    accomodationPrice: Number,
    foodAndBeveragePrice: Number,
    miscellaneousPrice: Number,
  },
  availableSeats: [String],
});
tripSchema.set("strictPopulate", false);

const tripModel = mongoose.model("trips", tripSchema);

module.exports = { tripModel };
