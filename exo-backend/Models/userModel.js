const mongoose = require("mongoose");

const genders = ["Male", "Female", "Non-Binary"];

const userSchema = new mongoose.Schema({
  quantumEncryptionKey: String,
  name: String,
  img: String,
  verification: String, // **********problem************
  gender: {
    type: String,
    enum: genders,
  },
  dob: Date,
  bookedTrips: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "trips",
  },
  savedCards: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cards",
  },
  occupation: [String],
  bloodGroup: String,
  authorizedLevel: String,
  citizenship: {
    planet: String,
    region: String,
  },
});
userSchema.set("strictPopulate", false);

const userModel = mongoose.model("users", userSchema);

module.exports = { userModel };
