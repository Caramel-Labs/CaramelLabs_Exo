const express = require("express");
const {
  fetchAllPlanets,
  fetchaPlanet,
} = require("../controllers/planetControllers");

const router = express.Router();

router.route("/").get(fetchAllPlanets);
router.route("/:name").get(fetchaPlanet);

module.exports = router;
