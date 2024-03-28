// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');

  const generateOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/otp/generate', { phoneNumber });
      console.log(response.data.message);
      setVerificationStatus(response.data.message);
    } catch (error) {
      console.error('Failed to generate OTP:', error);
      setVerificationStatus('Failed to generate OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/otp/verify', { phoneNumber, enteredOtp: otp });
      console.log(response.data.message);
      setVerificationStatus(response.data.message);
    } catch (error) {
      console.error('Failed to verify OTP:', error);
      setVerificationStatus('Failed to verify OTP');
    }
  };

  return (
    <div className="App">
      <h1>OTP Verification</h1>
      <input type="text" placeholder="Enter Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <button onClick={generateOtp}>Generate OTP</button>
      <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <button onClick={verifyOtp}>Verify OTP</button>
      <p>{verificationStatus}</p>
    </div>
  );
}

export default App;
