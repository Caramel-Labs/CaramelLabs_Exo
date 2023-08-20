const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Joi = require("joi");
const { tripModel } = require("../Models/tripModel");
const { bookingModel } = require("../Models/bookingModel");
const { spaceshipModel } = require("../Models/spaceshipModel");

//******************************************* */
//@description     fetch all trip details
//@route           POST /api/booking
//@access          --
//******************************************* */
const fetchallTripDetails = asyncHandler(async (req, res) => {
  const { arrivalPlanet, departurePlanet } = req.body;
  try {
    const Trips = await tripModel
      .find({
        $and: [
          { "arrival.planet": arrivalPlanet },
          { "departure.planet": departurePlanet },
        ],
      })
      .select({ arrival: 1, departure: 1 })
      .exec();

    if (Trips.length > 0) {
      res.status(200).json(Trips);
      console.log(Trips);
    } else {
      res.status(404).json({ message: "No trips between these planets" });
      console.log("No trips between these planets");
    }
  } catch (error) {
    res.status(400);
    console.log("Error in fetchallTripDetails function", error);
    throw new Error(error.message);
  }
});

//******************************************* */
//@description     fetch trip details
//@route           POST /api/booking
//@access          --
//******************************************* */
const fetchTripDetails = asyncHandler(async (req, res) => {
  if (!req.body._id) {
    console.log("trip_id param not sent with request");
    return res.sendStatus(400);
  }

  try {
    const Trip = await tripModel
      .findById({
        _id: req.body._id,
      })
      .populate("passengers")
      .populate("spaceship")
      .exec();

    if (Trip) {
      res.status(200).json(Trip);
      console.log(Trip);
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

//******************************************* */
//@description     createBooking
//@route           POST /api/booking/create
//@access          --
//******************************************* */
const createBooking = asyncHandler(async (req, res) => {
  const schema = Joi.object({
    user: Joi.string().required(),
    spaceship: Joi.string().required(),
    trip: Joi.array().items(Joi.string()),
    participants: Joi.array().items(Joi.string()),
    status: Joi.string().required(),
    class: Joi.string().required(),
    tripType: Joi.string(),
    veg: Joi.boolean(),
    vegan: Joi.boolean(),
    price: Joi.number().required(),
    seats: Joi.array().items(Joi.string()),
  });

  console.log("Recieved object", req.body);
  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    console.log("Error is in the Joi validation");
    return;
  }

  const newbooking = new bookingModel({
    user: req.body.user,
    spaceship: req.body.spaceship,
    trip: req.body.trip.map((tripId) => new mongoose.Types.ObjectId(tripId)),
    participants: req.body.participants.map(
      (participantId) => new mongoose.Types.ObjectId(participantId)
    ),
    status: req.body.status,
    class: req.body.class,
    tripType: req.body.tripType,
    veg: req.body.veg,
    vegan: req.body.vegan,
    price: req.body.price,
    seats: req.body.seats,
  });

  try {
    const result = await newbooking.save();
    console.log("Booking saved successfully:", result);
    res.send(result);
  } catch (error) {
    console.error("Error saving Booking:", error);
  }
});

//*********************************************** */
//@description     Confirm Booking and add
//                    passengers to specific trip
//@route           PUT /api/booking/confirm
//@access          --
//*********************************************** */
const confirmBooking = asyncHandler(async (req, res) => {
  try {
    const bookingId = req.body.bookingId;
    const { price } = req.body;

    const updatedBooking = await bookingModel.findByIdAndUpdate(
      bookingId,
      {
        $set: {
          status: "Confirmed",
          price: price,
        },
      },
      { new: true }
    );
    console.log(updatedBooking);
    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Update passengers in the trip document
    const tripId = updatedBooking.trip;
    const participants = updatedBooking.participants;

    await tripModel.findByIdAndUpdate(
      tripId,
      { $addToSet: { passengers: participants } },
      { new: true }
    );

    res.status(200).json(updatedBooking);
  } catch (error) {
    console.error("Error updating booking:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = {
  fetchTripDetails,
  fetchallTripDetails,
  createBooking,
  confirmBooking,
};
