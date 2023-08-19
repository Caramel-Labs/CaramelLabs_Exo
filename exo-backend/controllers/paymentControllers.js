const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const { userModel } = require("../Models/userModel");
const { paymentCardModel } = require("../Models/paymentCardModel");

//****************************************************** */
//@description     fetch Saved Cards
//@route           POST /api/payments/savedCards
//@access          --
//****************************************************** */
const fetchSavedCards = asyncHandler(async (req, res) => {
  try {
    const userObjectId = new mongoose.Types.ObjectId(req.body._id);

    const user = await userModel
      .find({
        _id: userObjectId,
      })
      .populate("savedCards")
      .exec();
    // add condition to if statement ----i want to check whether there are saved card or not
    if (user) {
      res.status(200).json(user);
      console.log(user);
    } else {
      res.status(404).json({ message: "The user has no any saved cards" });
      console.log("The user has no any saved cards");
    }
  } catch (error) {
    res.status(400).json({ message: "Error loading saved cards" });
    console.log("Error in the fetchSavedCards function:", error);
  }
});

module.exports = {
  fetchSavedCards,
};
