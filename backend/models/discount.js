const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema({
  business: { type: String, required: true },
  url: { type: String, required: true },
  discount: { type: String, required: true },
  eligibility: { type: String, required: true },
  category: { type: String, required: true },
}, { timestamps: true });
// Declares a new discount model

const Discount = mongoose.model("Discount", discountSchema);
// Access to monggose variables to connect the Schema and our CRUD routes

module.exports = Discount;
