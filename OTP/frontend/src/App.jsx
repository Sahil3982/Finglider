import React, { useState } from 'react';
import axios from 'axios';

const OtpVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleSendOtp = async () => {
    try {
      const response = await axios.post('/api/generate-otp', { phoneNumber });
      console.log(response.data.message);
      setVerificationStatus('OTP sent successfully');
    } catch (error) {
      console.error('Failed to send OTP:', error);
      setVerificationStatus('Failed to send OTP');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('/api/verify-otp', { otp });
      console.log(response.data.message);
      setVerificationStatus('OTP verified successfully');
    } catch (error) {
      console.error('Failed to verify OTP:', error);
      setVerificationStatus('Failed to verify OTP');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <input
        type="text"
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md mb-4 px-4 py-2"
      />
      <button
        onClick={handleSendOtp}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2"
      >
        Send OTP
      </button>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md my-4 px-4 py-2"
      />
      <button
        onClick={handleVerifyOtp}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2"
      >
        Verify OTP
      </button>
      {verificationStatus && (
        <p className="text-sm text-gray-500 mt-4">{verificationStatus}</p>
      )}
    </div>
  );
};

export default OtpVerification;
