const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema({
  business: { type: String },
  url: { type: String },
  discount: { type: String },
  eligibility: { type: String },
  categories: { type: String },
});
// Declares a new discount model

const Discount = mongoose.model("Discount", discountSchema);
// Access to monggose variables to connect the Schema and our CRUD routes

module.exports = Discount;
