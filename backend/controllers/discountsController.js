const Discount = require('../models/discount')

// create discount
const createDiscount = async (req, res) => {
    const { date, location, discountName } = req.body;
    const discount = await Discount.create({
      business: business,
      location: location,
      discountName: discountName,
    })
    // res.json({ discount: discount })
    res.render('discounts', { discount: discount });
  };
  
  // read discounts
  const readDiscount = async (req, res) => {
    const discounts = await Discount.find();
    console.log('fetch all discounts');
    // res.json({ discounts: discounts });
    res.render('discounts', { discounts: discounts });
  };
  
  // read discount by ID
  const readDiscountById = async (req, res) => {
    const discountID = req.params.id //find by ID
    const thisDiscount = await Discount.findById(discountID);
    console.log('fetch discount by id');
    // res.json({ discount: thisDiscount });
    res.render('discounts', { discount: thisDiscount });
  };
  
  // update discount
  const updateDiscount = async (req, res) => {
    const discountId = req.params.id
    const { date, location, discountName } = req.body;
    const discount = await Discount.findByIdAndUpdate(discountId, {
      date: date,
      location: location,
      discountName: discountName,
    })
    const updatedDiscount = await Discount.findById(discountId)
    console.log('update Discount');
    res.json({ discount: updatedDiscount});
    res.render('discounts', { discount: updatedDiscount });
  };
  
  // delete Discount
  const deleteDiscount = async (req, res) => {
    const discountId = req.params.id
    await Discount.deleteOne({
      _id: discountId 
    })
    res.json({ success: "discount deleted" })
  };

module.exports = {
  readDiscount,
  readDiscountById,
  updateDiscount,
  createDiscount,
  deleteDiscount
};