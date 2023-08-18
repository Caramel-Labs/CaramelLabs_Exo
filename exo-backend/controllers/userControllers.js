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
const fetchBoardingPasses = asyncHandler(async (req, res) => {
  try {
    const userObjectId = new mongoose.Types.ObjectId(req.body._id);

    const userBookings = await bookingModel
      .find({
        participants: userObjectId,
      })
      .populate("spaceship")
      .populate("trip")
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

module.exports = {
  fetchBoardingPasses,
};
