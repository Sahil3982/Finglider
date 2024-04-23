const express = require("express");
const router = express.Router();
const cartControllers = require('../controllers/cartControllers');

router.post('/',cartControllers.create_cart);
//router.get('/',cartControllers.post_cart);

module.exports = router;