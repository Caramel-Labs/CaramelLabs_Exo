const asyncHandler = require("express-async-handler");
const { userModel } = require("../Models/userModel");

//****************************************************** */
//@description     fetch Boarding Passes
//@route           POST /api/booking/boardingPasses
//@access          --
//****************************************************** */
const fetchUserProfile = asyncHandler(async (req, res) => {
  try {
    const user = await userModel.find({
      _id: req.params._id, //suppose this _id = SGC id
    });

    if (user) {
      res.status(200).json(user);
      console.log(user);
    } else {
      res.status(404).json({ message: "Trip object not found" });
      console.log("Trip object not found");
    }
  } catch (error) {
    res.status(400);
    console.log("Error is in the fetchTripDetails function", error);
    throw new Error(error.message);
  }
});
module.exports = {
  fetchUserProfile,
};
