const express = require("express");
const { fetchBoardingPasses } = require("../controllers/userControllers");

const router = express.Router();

router.route("/bordingPass").post(fetchBoardingPasses);

module.exports = router;
