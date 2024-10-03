const express = require('express');
const router = express.Router();
const discountsController = require('../controllers/discountsController')

router.get('/',discountsController.readDiscount);
// -->Retrieve all discount in DB
router.get('/:id',discountsController.readDiscountById);
// -->Retrieve Specific discount in DB
router.post('/',discountsController.createDiscount);
// --> Add a discount to DB
router.put('/:id',discountsController.updateDiscount);
// --> Edit a Existing discount in DB
router.delete('/:id',discountsController.deleteDiscount);
// --> Delete a Existing discount in DB

module.exports = router;