const express = require("express");
const { fetchBoardingPasses } = require("../controllers/userControllers");

const router = express.Router();

router.route("/boardingPass").post(fetchBoardingPasses);

module.exports = router;
