const mongoose = require("mongoose");

const paymentCardSchema = new mongoose.Schema({
  cardNumber: String,
  expireDate: String,
  cvv: Number,
  cardType: String,
});

const paymentCardModel = mongoose.model("paymentCard", paymentCardSchema);

module.exports = { paymentCardModel };
