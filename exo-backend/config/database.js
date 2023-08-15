const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI;

const connectDB = async () => {
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client) => {
      console.log(
        `SUCCESS: connection to MongoDB database (Atlas server) established`
      );
      console.log(
        "******************************************************************"
      );
    })
    .catch((err) => {
      console.error("ERROR: could not connect to MongoDB database!");
      console.error("More info about this error:", err);
    });
};

module.exports = connectDB;
