const express = require("express");
const router = express.Router();
const menuControllers =require('../controllers/menuControllers.js');


router.get('/',menuControllers.get_all_menu);
router.post('/',menuControllers.create_menu);

router.get('/:id',menuControllers.get_one_menu);
router.put('/:id',menuControllers.update_menu);
router.delete('/:id',menuControllers.delete_menu);

module.exports = router;