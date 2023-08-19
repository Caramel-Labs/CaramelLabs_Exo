const express = require("express");
const { fetchSavedCards } = require("../controllers/paymentControllers");

const router = express.Router();

router.route("/savedCards").post(fetchSavedCards);

module.exports = router;
