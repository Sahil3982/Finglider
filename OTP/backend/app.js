import { Router } from 'express';
const router = Router();
import { generate } from 'otp-generator';
import twilio from 'twilio'; // Import the twilio module

// Initialize Twilio with your account SID and auth token
const twilioClient = twilio(accountSid, authToken);

router.post('/generate-otp', (req, res) => {
  const otp = generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
  const { phoneNumber } = req.body;

  twilioClient.messages.create({
    body: `Your OTP is: ${otp}`,
    from: '+1234567890', // Your Twilio phone number
    to: phoneNumber
  }).then(message => {
    console.log(message.sid);
    res.json({ success: true, message: 'OTP sent successfully' });
  }).catch(error => {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send OTP' });
  });
});

// Add endpoint for OTP verification

export default router;
