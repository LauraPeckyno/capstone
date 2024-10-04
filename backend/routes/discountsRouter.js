const express = require('express');
const router = express.Router();
const discountsController = require('../controllers/discountsController');

router.get('/', discountsController.readDiscount); // Get all discounts
router.get('/:id', discountsController.readDiscountById); // Get discount by ID
router.post('/', discountsController.createDiscount); // Create a new discount
router.put('/:id', discountsController.updateDiscount); // Update discount by ID
router.delete('/:id', discountsController.deleteDiscount); // Delete discount by ID

// New route for fetching discounts by category
router.get('/category/:category', discountsController.getDiscountsByCategory); // Get discounts by category

// Error handler
router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = router;