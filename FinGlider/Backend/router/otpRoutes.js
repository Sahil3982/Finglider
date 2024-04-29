const express = require("express");
const router = express.Router();
const otpControllers = require('../controllers/otpControllers');

router.post('/getphoneno',otpControllers.create_no);
router.post('/verifyotp',otpControllers.verify_no);


module.exports = router;  