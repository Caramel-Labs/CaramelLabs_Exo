const mongoose = require("mongoose");

// Mocked data for bookings
const mockedBookings = [
  {
    _id: mongoose.Types.ObjectId(),
    participants: ["64df1d6d660b27f90c195a3a"],
    class: "Economy",
    spaceship: mongoose.Types.ObjectId(),
    trip: mongoose.Types.ObjectId(),
  },
  // Add more mocked booking data as needed
];

// Mocked bookingModel
const bookingModel = {
  find: jest.fn().mockResolvedValue(mockedBookings),
};

module.exports = { bookingModel };
