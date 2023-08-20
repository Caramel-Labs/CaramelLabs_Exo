const express = require("express");
const {
  fetchTripDetails,
  createBooking,
  bookedSeats,
  confirmBooking,
} = require("../controllers/bookingControllers");

const router = express.Router();

router.route("/").post(fetchTripDetails);
router.route("/create").post(createBooking);
router.route("/seats").post(bookedSeats);
router.route("/confirm").put(confirmBooking);

module.exports = router;
