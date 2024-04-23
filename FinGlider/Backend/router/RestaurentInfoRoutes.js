const express = require('express');
const router = express.Router();
const restaurentControllers = require('../controllers/restaurentControllers')
router.get('/',restaurentControllers.get_all_info);
router.post('/',restaurentControllers.create_info);

module.exports= router;