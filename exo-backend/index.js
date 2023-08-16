const express = require("express");
const connectDB = require("./config/database");
//const userRoute = require("./Routes/userRoute");
//const chatRoutes = require("./Routes/chatRoutes");
//const messegeRoutes = require("./Routes/messegeRoute");
//const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/api/users", userRoute);
// app.use("/api/chat", chatRoutes);
// app.use("/api/messege", messegeRoutes);

//app.use(notFound);
//app.use(errorHandler);

connectDB();
console.log("BACKEND SERVER STARTED");
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening to Port ${port}`));
