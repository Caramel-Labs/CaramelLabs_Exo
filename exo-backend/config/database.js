const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "exo", // Specify the database name here
    });

    console.log(
      `SUCCESS: Connected to MongoDB database "${connection.connections[0].name}" on Atlas server`
    );
    console.log(
      "******************************************************************"
    );
  } catch (err) {
    console.error("ERROR: Could not connect to MongoDB database!");
    console.error("More info about this error:", err);
  }
};

module.exports = connectDB;
