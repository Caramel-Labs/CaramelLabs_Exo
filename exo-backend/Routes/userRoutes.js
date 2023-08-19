const express = require("express");
const { fetchAllBoardingPasses } = require("../controllers/userControllers");
const { fetchaBoardingPass } = require("../controllers/userControllers");

const router = express.Router();

router.route("/boardingPasses").post(fetchAllBoardingPasses);
router.route("/boardingPass").post(fetchaBoardingPass);

module.exports = router;
