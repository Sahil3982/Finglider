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
    <div className="App min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl mb-4">OTP Verification</h1>
      <input 
        type="text" 
        placeholder="Enter Phone Number" 
        value={phoneNumber} 
        onChange={(e) => setPhoneNumber(e.target.value)} 
        className="rounded-md p-2 mb-2 border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button onClick={generateOtp} className="bg-blue-500 text-white rounded-md px-4 py-2 mb-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Generate OTP
      </button>
      <input 
        type="text" 
        placeholder="Enter OTP" 
        value={otp} 
        onChange={(e) => setOtp(e.target.value)} 
        className="rounded-md p-2 mb-2 border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button onClick={verifyOtp} className="bg-blue-500 text-white rounded-md px-4 py-2 mb-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Verify OTP
      </button>
      <p className="text-sm text-gray-600">{verificationStatus}</p>
    </div>
  );
}

export default App;
