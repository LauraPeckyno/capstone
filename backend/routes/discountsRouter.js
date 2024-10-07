const express = require("express");
const router = express.Router();
const discountsController = require("../controllers/discountsController");

router.get("/", discountsController.readDiscount); // Get all discounts

// New route for featured discounts
router.get(
  "/category/:category/featured/:featured",
  discountsController.getFeaturedDiscountsByCategory
);

// New route for search results
router.get('/search', discountsController.searchDiscounts); // get discounts by search term

// New route for fetching discounts by category
router.get("/category/:category", discountsController.getDiscountsByCategory); // Get discounts by category

// New route for fetching all featured discounts from all categories
router.get("/featured", discountsController.getFeaturedDiscounts); // Get all featured discounts

router.get("/:id", discountsController.readDiscountById); // Get discount by ID
router.post("/", discountsController.createDiscount); // Create a new discount
router.put("/:id", discountsController.updateDiscount); // Update discount by ID
router.delete("/:id", discountsController.deleteDiscount); // Delete discount by ID

// Error handler
router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});

module.exports = router;
