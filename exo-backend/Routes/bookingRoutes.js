const express = require("express");
const {
  fetchTripDetails,
  fetchallTripDetails,
  createBooking,
  bookedSeats,
  confirmBooking,
} = require("../controllers/bookingControllers");

const router = express.Router();

router.route("/").post(fetchTripDetails);
router.route("/all").post(fetchallTripDetails);
router.route("/create").post(createBooking);
router.route("/seats").post(bookedSeats);
router.route("/confirm").put(confirmBooking);

module.exports = router;
