const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const { planetModel } = require("../Models/planetModel");

//****************************************************** */
//@description     fetch all planets
//@route           GET /api/planets/
//@access          --
//****************************************************** */
const fetchAllPlanets = asyncHandler(async (req, res) => {
  try {
    const allPlanets = await planetModel.find().exec();
    console.log("planets loaded successfully:", allPlanets);
    res.send(allPlanets);
  } catch (error) {
    console.error("Error loading all planets", error);
    res.status(500).send("Error loading planets");
  }
});

//****************************************************** */
//@description     fetch a specific planet by it's name
//@route           GET /api/planets/:name
//@access          --
//****************************************************** */
const fetchaPlanet = asyncHandler(async (req, res) => {
  try {
    const planet = await planetModel.findOne({
      name: req.params.name,
    });

    if (planet) {
      res.status(200).json(planet);
      console.log(planet);
    } else {
      res.status(404).json({ message: "invalide planet name" });
      console.log("The user does not have any matching planet for this name");
    }
  } catch (error) {
    res.status(400).json({ message: "Error in fetchaPlanet function" });
    console.log("Error in the fetchaPlanet function:", error);
  }
});

module.exports = {
  fetchAllPlanets,
  fetchaPlanet,
};
