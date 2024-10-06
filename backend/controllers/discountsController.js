const Discount = require("../models/discount");

// create discount
const createDiscount = async (req, res) => {
  const { business, url, discount, eligibility, category } = req.body;
  const discountNew = await Discount.create({
    business: business,
    url: url,
    discount: discount,
    eligibility: eligibility,
    category: category,
  });
  res.json({ discount: discountNew });
  // res.render('discounts', { discount: discount });
};

// read discounts
const readDiscount = async (req, res) => {
  try {
    const query = req.query;
    const discounts = await Discount.find(query);
    console.log("Fetch discounts");
    res.json({ discounts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching discounts" });
  }
};

// read discount by ID
const readDiscountById = async (req, res) => {
  const discountID = req.params.id; //find by ID
  const thisDiscount = await Discount.findById(discountID);
  console.log("fetch discount by id");
  res.json({ discount: thisDiscount });
  // res.render('discounts', { discount: thisDiscount });
};

// update discount
const updateDiscount = async (req, res) => {
  const discountId = req.params.id;
  const { business, url, discount, eligibility, category } = req.body;
  const discountName = await Discount.findByIdAndUpdate(discountId, {
    business: business,
    url: url,
    discount: discount,
    eligibility: eligibility,
    category: category,
  });
  const updatedDiscount = await Discount.findById(discountId);
  console.log("update Discount");
  res.json({ discountName: updatedDiscount });
  // res.render('discounts', { discount: updatedDiscount });
};

// delete Discount
const deleteDiscount = async (req, res) => {
  const discountId = req.params.id;
  await Discount.deleteOne({
    _id: discountId,
  });
  res.json({ success: "discount deleted" });
};

const getFeaturedDiscountsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const featured = req.params.featured;
    const discounts = await Discount.find({ category, featured });
    res.json({ discounts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching discounts" });
  }
};

const getFeaturedDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.find({ featured: true });
    res.json({ discounts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching discounts" });
  }
};

const getDiscountsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const discounts = await Discount.find({ category });
    res.json({ discounts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching discounts" });
  }
};

module.exports = {
  readDiscount,
  readDiscountById,
  updateDiscount,
  createDiscount,
  deleteDiscount,
  getDiscountsByCategory,
  getFeaturedDiscountsByCategory,
  getFeaturedDiscounts,
};
