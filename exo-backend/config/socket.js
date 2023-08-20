const socketIo = require("socket.io");

const initiateSocket = (server) => {
  const io = socketIo(server);

  io.on("connection", (socket) => {
    // This code block will be executed when a client connects
    console.log("A user connected:", socket.id);

    socket.on("disconnect", () => {
      // This code block will be executed when a client disconnects
      console.log("User disconnected:", socket.id);
    });

    // Listen for seat booking update events from clients
    socket.on("updateSeatBooking", (data) => {
      // Emit the received seat booking update to all connected clients
      io.emit("seatBookingUpdated", data);
    });
  });
};

module.exports = initiateSocket;
