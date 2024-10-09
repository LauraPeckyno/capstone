const Discount = require("../models/discount");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// create discount
const createDiscount = async (req, res) => {
  try {
    const { business, url, discount, eligibility, category } = req.body;
    const discountNew = await Discount.create({
      business,
      url,
      discount,
      eligibility,
      category,
    });
    res.json({ discount: discountNew });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating discount' });
  }
};

// update discount
const updateDiscount = async (req, res) => {
  try {
    const discountId = req.params.id;
    const { business, url, discount, eligibility, category } = req.body;
    const updatedDiscount = await Discount.findByIdAndUpdate(discountId, {
      business,
      url,
      discount,
      eligibility,
      category,
    }, { new: true });
    console.log("Discount updated");
    res.json({ discount: updatedDiscount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating discount' });
  }
};

// delete discount
const deleteDiscount = async (req, res) => {
  try {
    const discountId = req.params.id;
    await Discount.findByIdAndDelete(discountId);
    res.json({ success: "Discount deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting discount' });
  }
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

// find featured discounts by category
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

// find featured discounts
const getFeaturedDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.find({ featured: true });
    res.json({ discounts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching discounts" });
  }
};

// get discounts by category
const getDiscountsByCategory = async (req, res) => {
  const category = req.params.category;
  const page = req.query.page || 1;
  const limit = 6;

  // setting up the number of pages from the results
  const discounts = await Discount.find({ category }) // pagination
    .skip((page - 1) * limit)
    .limit(limit);
  const totalDiscounts = await Discount.countDocuments({ category });
  const totalPages = Math.ceil(totalDiscounts / limit);
  res.json({ discounts, totalPages });
};

// controller for the searchbar
const searchDiscounts = async (req, res) => {
  const query = req.query.q;
  const discounts = await Discount.find({
    $or: [
      { category: { $regex: query, $options: "i" } },
      { business: { $regex: query, $options: "i" } },
      { discount: { $regex: query, $options: "i" } },
      { eligibility: { $regex: query, $options: "i" } },
    ],
  });
  res.json({ discounts });
};

module.exports = {
  readDiscount,
  readDiscountById,
  createDiscount,
  updateDiscount,
  deleteDiscount,
  getDiscountsByCategory,
  getFeaturedDiscountsByCategory,
  getFeaturedDiscounts,
  searchDiscounts,
};
