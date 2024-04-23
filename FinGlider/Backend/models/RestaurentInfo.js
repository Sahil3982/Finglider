const mongoose = require('mongoose');


const restaurantInfoSchema = new mongoose.Schema({
  
    Name: String,
    Address: String,
    Phone: String,
    Whatsapp: String,
    OpenTime: String,
    CloseTime: String,
    TemplateWithImage: Boolean,
    ApplicationHeader: String,
    Tax: Number,
    TaxDesc: String,
    DeliverCharge: Number
 
});


const Restaurant = mongoose.model('Restaurant', restaurantInfoSchema);


module.exports = Restaurant;
