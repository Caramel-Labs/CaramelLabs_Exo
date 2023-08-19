const mongoose = require("mongoose");

const paymentCardSchema = new mongoose.Schema({
  cardNumber: String,
  expireDate: String,
  cvv: Number,
  cardType: String,
});

paymentCardSchema.set("strictPopulate", false);

const paymentCardModel = mongoose.model("cards", paymentCardSchema);

module.exports = { paymentCardModel };
