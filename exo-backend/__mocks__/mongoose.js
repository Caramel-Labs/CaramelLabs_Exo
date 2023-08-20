const mongoose = require("mongoose");

mongoose.Types.ObjectId = jest.fn(() => "mockedObjectId");

module.exports = mongoose;
