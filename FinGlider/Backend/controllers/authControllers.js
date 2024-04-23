const User = require('../models/Users');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { createError } = require('../middleware/error.js');

const maxAge = parseInt(process.env.MAX_AGE_JWT);


const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY , { expiresIn: maxAge });
};

module.exports.signup_get = (req, res) => {
    res.json({message:'signup page'});
}

module.exports.signup_post = async (req, res,next) => {
    const { email, password, phone } = req.body;

    try {
        const user = new User({
            email,
            password,
            phone
            });


        const savedUser = await user.save();
        const token = createToken(user._id);
        res.cookie('jwt',token,{maxAge: maxAge*1000,httpOnly:true})
        res.status(201).json(savedUser); 
    } catch (error) {
        next(createError(400, "User not Created")); 
    }
}

module.exports.login_get = (req, res) => {
    res.json({message:'login page'});
}

module.exports.login_post = async (req, res, next) => {
   
    const { email, password } = req.body;

    try {
        const user = await User.login(email,password);
        const token = createToken(user._id);
        res.cookie('jwt',token,{maxAge:maxAge*1000,httpOnly:true})
        res.status(200).json(user); 
    } catch (error) {
        next(createError(400, "Wrong password or username!"));
    }
}
module.exports.logout_get = (req,res)=>{
    res.cookie('jwt','', { maxAge:1 });
    res.redirect('/');
}