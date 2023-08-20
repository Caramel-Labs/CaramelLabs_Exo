const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const bookingRoute = require("./Routes/bookingRoutes");
const userRoute = require("./Routes/userRoutes");
const paymentRoute = require("./Routes/paymentRoutes");
const planetRoute = require("./Routes/planetRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));

app.use("/api/booking", bookingRoute);
app.use("/api/user", userRoute);
app.use("/api/payments", paymentRoute);
app.use("/api/planets", planetRoute);

//app.use(notFound);
//app.use(errorHandler);

connectDB();
console.log("BACKEND SERVER STARTED");
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening to Port ${port}`));
