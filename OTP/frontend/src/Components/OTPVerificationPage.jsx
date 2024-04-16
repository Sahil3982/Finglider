/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';

function OTPVerificationPage({ phoneNumber }) { 
  const [otp, setOtp] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');
  const navigate = useNavigate(); 

  const handleVerify = async () => {
    try {
      const response = await axios.post('http://localhost:5000/verifyotp', { phoneNumber, enteredOtp: otp }); // Include phoneNumber in the request
      if (response.data.success) {
        setVerificationStatus('OTP Verified!');
        navigate('/dashboard');
      } else {
        setVerificationStatus('Incorrect OTP');
      }
    } catch (error) {
      console.error('Failed to verify OTP:', error);
      setVerificationStatus('Failed to verify OTP');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-gray-100 rounded-lg shadow-lg">
    <h1 className="text-3xl mb-4 text-center">Enter OTP Here </h1>
    <div className="flex flex-col items-center">
      <input 
        type="text" 
        placeholder="Enter OTP" 
        value={otp} 
        onChange={(e) => setOtp(e.target.value)} 
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
      />
      <button onClick={handleVerify} className="bg-blue-500 text-white px-10 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
        Verify OTP
      </button>
      <p className="text-sm text-gray-600 mt-2">{verificationStatus}</p>
    </div>
  </div>
  );
}

export default OTPVerificationPage;
