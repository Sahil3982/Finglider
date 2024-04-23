
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
 
  name: {
    type: String,
    required: [true,"name is required"]
  },
  phoneNumber: {
    type: String,
    required: [true,"phonenumber is required"]
  },
  email: {
    type: String,
    required:[true,"email is required"]
  },
  address: {
    type: String,
    required:[true,"address is required"]
  },
  items: [
    {
      name: { type: String, 
      required:[true,'name is required'],
      },
      price: { type: Number, 
      required:[true,'price is required'],
    },
      quantity: { type: Number, 
      default: 1 },
    
    },   
  ],
  
  totalPrice: {
    type: Number,
    required: true
  },
  orderstatus:{
    type:String,
    default:"New Order"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

