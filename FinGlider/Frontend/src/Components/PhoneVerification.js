import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";

import axios from 'axios';

const OTPVerificationComponent = ({phoneNumber,setIsVerified,setColor,form}) => {
 
  const [enteredOTP, setEnteredOTP] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('')
  
  const handleVerification = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/otp/verifyotp', {phoneNumber: phoneNumber || form.phoneNumber,  enteredOtp:enteredOTP});
      console.log('ph',phoneNumber);
      if (response.data.success) {
        setVerificationStatus('verified');
       const timeout =2000;
        setTimeout(() => {
            setIsVerified(false); 
            setColor(true);
        }, timeout);
       
      } else {
        setVerificationStatus('failed');
      }
    } catch (error) {
      console.error('Failed to verify OTP:', error);
      setVerificationStatus('error');
    }
  };

  return (
    <div className="container mt-3"  style={{ position: "fixed",top: '60px', left: '700px',zIndex:'1500' }}>
      <div className="row justify-content-center mx-auto" style={{ maxWidth: "1000px"}}>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">

                 <div className='px-2 pb-5' style={{ position: 'absolute', top: '5px', right: '10px',fontSize:"18px" }}> 
                   <span><IoClose onClick={()=>setIsVerified(false)}/></span>
                 </div>
              <h5 className="card-title mb-4">OTP Verification</h5>
             
              <div className="mb-3">
                <input
                  type="text"
                  value={enteredOTP}
                  onChange={(e) => setEnteredOTP(e.target.value)}
                  className="form-control"
                  placeholder="Enter OTP"
                />
              </div>
              <button onClick={handleVerification} className="btn btn-primary">Verify OTP</button>
              {verificationStatus === 'verified' && <p className="text-success mt-3">OTP Verified. Redirecting to main page...</p>}
              {verificationStatus === 'failed' && <p className="text-danger mt-3">Incorrect OTP. Please try again.</p>}
              {verificationStatus === 'error' && <p className="text-danger mt-3">Failed to verify OTP. Please try again later.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationComponent;
