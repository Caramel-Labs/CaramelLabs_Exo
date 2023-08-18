const express = require("express");
const { fetchUserProfile } = require("../controllers/userControllers");

const router = express.Router();

router.route("/").post(fetchUserProfile);

module.exports = router;
