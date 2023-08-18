const mongoose = require("mongoose");

const spaceshipSchema = new mongoose.Schema({
  name: String,
  description: String, // we have to include owner property as well
  availableClasses: {
    type: [String],
    default: ["Cosmo Cruiser", "Orion Lux", "Astro Hop"],
  },
  capacity: {
    cosmoCruiser: Number,
    orionLux: Number,
    astroHop: Number,
  },
  owner: String,
});

spaceshipSchema.set("strictPopulate", false);

const spaceshipModel = mongoose.model("spaceships", spaceshipSchema);

module.exports = { spaceshipModel };
