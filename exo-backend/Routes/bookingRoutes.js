const express = require("express");
const {
  fetchTripDetails,
  createBooking,
  //   fetchSpaceshipDetails,
  //   bookedSeats,
} = require("../controllers/bookingControllers");

const router = express.Router();

router.route("/").post(fetchTripDetails);
router.route("/create").post(createBooking);
// router.route("/seats").get(fetchSpaceshipDetails);
// router.route("/seats").post(bookedSeats);

module.exports = router;
