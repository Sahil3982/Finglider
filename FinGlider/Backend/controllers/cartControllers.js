const Cart = require("../models/Cart");
const { createError } = require("../middleware/error");

module.exports.create_cart = async (req, res, next) => {
  try {
    const { name, phoneNumber, email, address, items, totalPrice } = req.body;

    const newCart = new Cart({
      name,
      phoneNumber,
      email,
      address,
      items,
      totalPrice,
    });
    // console.log('Received cart data:', newCart);
    const savedCart = await newCart.save();

    res.status(201).json({ success: true, items: savedCart });
  } catch (error) {
    console.error("Error creating cart:", error);
    next(createError(500, "Internal Server Error"));
  }
};
