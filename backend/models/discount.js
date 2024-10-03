const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema({
  Business: { type: String },
  URL: { type: String },
  Discount: { type: String },
  Eligibility: { type: String },
  Categories: { type: String },
});
// Declares a new discount model

const Discount = mongoose.model("Discount", discountSchema);
// Access to monggose variables to connect the Schema and our CRUD routes

module.exports = Discount;
