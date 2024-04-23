const Restaurant = require('../models/RestaurentInfo');
const { createError } = require('../middleware/error');


    module.exports.create_info = async (req, res, next) => {
        try {
            const {  Name, Address, Phone, Whatsapp, OpenTime, CloseTime, TemplateWithImage, ApplicationHeader, Tax, TaxDesc, DeliverCharge} = req.body;
            
            const restaurant = new Restaurant({
                Name, Address, Phone, Whatsapp, OpenTime, CloseTime,
                TemplateWithImage, ApplicationHeader, Tax, TaxDesc, DeliverCharge
            });
            
            const savedRestaurant = await restaurant.save();
            
            res.status(201).json({ message: 'Restaurant info created successfully', RestaurantInfo: savedRestaurant });
        } catch (error) {
            console.error(error);
            next(createError(500, "Failed to create restaurant information"));
        }
    };

module.exports.get_all_info = async(req,res,next)=>{
    try {
        const restaurants = await Restaurant.find({});
        if(restaurants){
            res.status(200).json({restaurants});
        }
        else{
            res.status(400).json({message:' info not found'});
        }
    } catch (error) {
        console.error(error);
        next(createError(500, "Info not created"));
    }
}