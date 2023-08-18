const express = require("express");
const connectDB = require("./config/database");
const bookingRoute = require("./Routes/bookingRoutes");
const userRoute = require("./Routes/userRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/booking", bookingRoute);
app.use("/api/user", userRoute);

//app.use(notFound);
//app.use(errorHandler);

connectDB();
console.log("BACKEND SERVER STARTED");
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening to Port ${port}`));
