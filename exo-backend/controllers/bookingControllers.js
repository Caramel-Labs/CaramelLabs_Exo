const asyncHandler = require("express-async-handler");
const { tripModel } = require("../Models/tripModel");
const { bookingModel } = require("../Models/bookingModel");

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
    user_id: Joi.string().required(),
    spaceship_id: Joi.string().required(),
    trip_id: Joi.array().items(Joi.string()),
    status: Joi.string().required(),
    class: Joi.string().required(),
    tripType: Joi.string(),
    veg: Joi.boolean(),
    price: Joi.number().required(),
    seats: Joi.string(),
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
//******************************************* */
//@description     Seat Booking
//@route           POST /api/booking/seats
//@access          --
//******************************************* */
const bookedSeats = asyncHandler(async (req, res) => {
  if (!req.body._id) {
    console.log("booking_id param not sent with request");
    return res.sendStatus(400);
  }

  try {
    const booking = await bookingModel.find({
      _id: req.body._id,
    });

    if (booking) {
      try {
        const filter = { _id: req.body._id };
        const update = { $push: { seats: req.body.seats } };
        const options = { new: true };

        const result = await bookingModel.updateOne(filter, update, options);
        console.log(result);

        if (result.nModified === 0) {
          return res.status(404).json({ error: "No document found" });
          console.log("No document found");
        }
        // Fetch the updated profile after the update
        try {
          const yourBooking = await bookingModel
            .findById(filter)
            .populate("user")
            .populate("trip")
            .populate("spaceship")
            .exec();

          res.status(200).json(yourBooking);
          console.log(yourBooking);
        } catch (error) {
          console.error("Error while populating:", error);
          res.status(500).json({ message: "Internal server error" });
        }
      } catch (error) {
        console.error("Error adding value to array:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    } else {
      res.status(404).json({ message: "Booking object not found" });
    }
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = {
  fetchTripDetails,
  createBooking,
  bookedSeats,
};
