const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema({
  business: { type: String, required: true },
  url: { type: String, required: true },
  discount: { type: String, required: true },
  eligibility: { type: String, required: false},
  category: { type: String, required: true },
  address: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false },
  zip: { type: String, required: false },
  phone: { type: String, required: false }

}, { timestamps: true });
// Declares a new discount model

const Discount = mongoose.model("Discount", discountSchema);
// Access to monggose variables to connect the Schema and our CRUD routes

module.exports = Discount;
