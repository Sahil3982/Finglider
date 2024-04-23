const OTP = require('../models/otp');
const { createError } = require('../middleware/error');
const twilio = require('twilio');
const jwt = require('jsonwebtoken');

// Configure Twilio client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

module.exports.create_no = async (req, res, next) => {
  const { phoneNumber } = req.body;
  const otp = generateNumericOTP(4); // Generate numeric-only OTP
  console.log(phoneNumber);

  try {
    // Save OTP to database
    await OTP.create({ phoneNumber, otp });

    // Send OTP via SMS using Twilio
    await twilioClient.messages.create({
      body: `Your OTP is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: "+91" + phoneNumber, // Include the country code
    });

    res.json({ success: true, message: "OTP generated successfully" });
  } catch (error) {
    console.error("Failed to generate OTP:", error);
    res.status(500).json({ success: false, message: "Failed to generate OTP" });
  }
};

module.exports.verify_no = async (req, res, next) => {
  const { phoneNumber, enteredOtp } = req.body;
  console.log(phoneNumber, enteredOtp);

  try {
    // Verify OTP in the database
    const otpDoc = await OTP.findOne({ phoneNumber, otp: enteredOtp });
    if (otpDoc) {
      // If OTP is verified, generate a JWT token with 30-day expiration

      const token = jwt.sign({ phoneNumber }, process.env.SECRET_KEY, {
        expiresIn: "30d",
      });
      res.json({ success: true, message: "OTP verified successfully", token });
    } else {
      res.json({ success: false, message: "Incorrect OTP" });
    }
  } catch (error) {
    console.error("Failed to verify OTP:", error);
    res.status(500).json({ success: false, message: "Failed to verify OTP" });
  }
};

// Utility function to generate numeric OTP
const generateNumericOTP = (length) => {
  const numericChars = "0123456789";
  let otp = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * numericChars.length);
    otp += numericChars[randomIndex];
  }
  return otp;
};
