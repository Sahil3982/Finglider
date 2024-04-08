// Import required modules
import express from 'express';
import { connect, Schema, model } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import twilio from 'twilio';
import jwt from 'jsonwebtoken'; 

// Configure environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Failed to connect to MongoDB:', error));

// Twilio client setup
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Define OTP model
const otpSchema = new Schema({
  phoneNumber: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 300 } 
});
const OTP = model('OTP', otpSchema);

// Express middleware
app.use(express.json());
app.use(cors());

// Routes
app.post('/otp/generate', async (req, res) => {
  const { phoneNumber } = req.body;
  const otp = generateNumericOTP(6); // Generate numeric-only OTP

  try {
    // Save OTP to database
    await OTP.create({ phoneNumber, otp });
    
    // Send OTP via SMS using Twilio
    await twilioClient.messages.create({
      body: `Your OTP is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: "+91" + phoneNumber // Include the country code
    });

    res.json({ success: true, message: 'OTP generated successfully' });
  } catch (error) {
    console.error('Failed to generate OTP:', error);
    res.status(500).json({ success: false, message: 'Failed to generate OTP' });
  }
});

app.post('/otp/verify', async (req, res) => {
  const { phoneNumber, enteredOtp } = req.body;    

  try {
    // Verify OTP in the database
    const otpDoc = await OTP.findOne({ phoneNumber, otp: enteredOtp });
    if (otpDoc) {

      // If OTP is verified, generate a JWT token with 30-day expiration
      
      const token = jwt.sign({ phoneNumber }, process.env.JWT_SECRET, { expiresIn: '30d' });
      res.json({ success: true, message: 'OTP verified successfully', token });
    } else {
      res.json({ success: false, message: 'Incorrect OTP' });
    }
  } catch (error) {
    console.error('Failed to verify OTP:', error);
    res.status(500).json({ success: false, message: 'Failed to verify OTP' });
  }
});

// Utility function to generate numeric OTP
const generateNumericOTP = (length) => {
  const numericChars = '0123456789';
  let otp = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * numericChars.length);
    otp += numericChars[randomIndex];
  }
  return otp;
};

// Create Twilio Verify service
twilioClient.verify.services
  .create({ friendlyName: 'My First Verify Service' })
  .then(service => console.log(service.sid))
  .catch(error => console.error('Failed to create Verify service:', error));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
