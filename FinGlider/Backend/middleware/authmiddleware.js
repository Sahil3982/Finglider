const jwt = require('jsonwebtoken');
const User = require('../models/Users');
require('dotenv').config();
const { createError } = require('./error.js');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
            if (err) {
            
                next(createError(403, "Token is not valid!"));
            } else {
               
                console.log(decodedToken);
                next();
            }
        });
    } else {
        
        next(createError(401, "You are not authenticated!"));
    }

    
    res.redirect('/');
};

module.exports = { requireAuth };
