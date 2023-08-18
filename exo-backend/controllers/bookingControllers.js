// fetchTripDetails,
//   createBooking,
//   fetchSpaceshipDetails,
//   bookedSeats
const asyncHandler = require("express-async-handler");
const { tripModel } = require("../Models/tripModel");
const { bookingModel } = require("../Models/bookingModel");
const { spaceshipModel } = require("../Models/spaceshipModel");

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
    const Trip = await tripModel.find({
      _id: req.body._id,
    });
    //.populate("passengers")
    //.populate("spaceship");

    if (Trip) {
      res.status(200).json(Trip);
    } else {
      res.status(404).json({ message: "Trip object not found" });
    }
  } catch (error) {
    res.status(400);
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
    user_id: Joi.string().required(),
    spaceship_id: Joi.string().required(),
    trip_id: Joi.array().items(Joi.string()),
    status: Joi.string().required(),
    class: Joi.string().required(),
    tripType: Joi.string(),
    veg: Joi.boolean(),
    price: Joi.number().required(),
  });

  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  //check whether the user is already registered
  let user = await ProfileModel.findOne({
    $and: [
      { user: { $elemMatch: { $eq: user_id } } },
      { trip: { $elemMatch: { $eq: trip_id } } },
    ],
  });
  if (user) {
    console.log(`${req.body.email} is already registered`);
    return res.status(400).send("Email already registered");
  }

  const newbooking = new bookingModel({
    user_id: req.body.user_id,
    spaceship_id: req.body.spaceship_id,
    trip_id: req.body.trip_id,
    status: req.body.staus,
    class: req.body.class,
    tripType: req.body.tripType,
    veg: req.body.veg,
    price: req.body.price,
  });

  try {
    const result = await newbooking.save();
    console.log("Booking saved successfully:", result);
    res.send(result);
  } catch (error) {
    console.error("Error saving Booking:", error);
  }
});

module.exports = {
  fetchTripDetails,
  createBooking,
};
