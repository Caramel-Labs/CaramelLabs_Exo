const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema({
  name: String,
  description: String,
  trips: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "trips",
  },
  planetImg: String,
  galleryImages: [String],
  //still not complete ... this suitable only for booking flow
});

planetSchema.set("strictPopulate", false);

const planetModel = mongoose.model("planets", planetSchema);

module.exports = { planetModel };
