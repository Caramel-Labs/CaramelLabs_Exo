const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const { userModel } = require("../Models/userModel");
const { bookingModel } = require("../Models/bookingModel");
const { spaceshipModel } = require("../Models/spaceshipModel");
const { tripModel } = require("../Models/tripModel");

//****************************************************** */
//@description     fetch Boarding Passes
//@route           POST /api/booking/boardingPasses
//@access          --
//****************************************************** */
const fetchAllBoardingPasses = asyncHandler(async (req, res) => {
  try {
    const userObjectId = new mongoose.Types.ObjectId(req.body._id);

    const userBookings = await bookingModel
      .find({
        participants: userObjectId,
      })
      .select({ class: 1, spaceship: 1, trip: 1 })
      .populate("spaceship", "name")
      .populate("trip", "arrival departure")
      .exec();

    if (userBookings.length > 0) {
      res.status(200).json(userBookings);
      console.log(userBookings);
    } else {
      res.status(404).json({ message: "The user does not have any bookings" });
      console.log("The user does not have any bookings");
    }
  } catch (error) {
    res.status(400).json({ message: "Error in fetchBoardingPasses function" });
    console.log("Error in the fetchBoardingPasses function:", error);
  }
});

//****************************************************** */
//@description     fetch a specific Boarding Pass
//@route           POST /api/booking/boardingPass
//@access          --
//****************************************************** */
const fetchaBoardingPass = asyncHandler(async (req, res) => {
  try {
    const Booking = await bookingModel
      .find({
        _id: req.body._id,
      })
      .select({ class: 1, spaceship: 1, trip: 1 })
      .populate("spaceship", "name")
      .populate("trip", "arrival departure")
      .exec();

    if (Booking) {
      res.status(200).json(Booking);
      console.log(Booking);
    } else {
      res.status(404).json({ message: "invalide booking _id" });
      console.log("The user does not have any matching bookings for that _id");
    }
  } catch (error) {
    res.status(400).json({ message: "Error in fetchaBoardingPass function" });
    console.log("Error in the fetchaBoardingPass function:", error);
  }
});

module.exports = {
  fetchAllBoardingPasses,
  fetchaBoardingPass,
};
