/* eslint-disable no-unused-vars */
// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PhoneInputPage from "./Components/PhoneInputPage";
import OTPVerificationPage from "./Components/OTPVerificationPage";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import axios from 'axios';
import PendingOrder from "./Pages/PendingOrder";
import Home from "./Pages/Home";
function App() {

  const [phoneNumber, setPhoneNumber] = useState("");
  const handleNext = ()=>{
    
    axios.post('http://localhost:5000/getphoneno', { phoneNumber })
    .then(response => {
      // Handle response from the server
      if (response.data.success) {
        console.log("OTP Generated successful");
        // Handle successful OTP verification, e.g., navigate to the next step
      } else {
        console.log("OTP Generated failed");
        // Handle failed OTP verification, e.g., display error message
      }
    })
    .catch(error => {
      // Handle error in sending data to the server
      console.error('Error sending data to server:', error);
      // Display an error message or handle the error appropriately
    });
  }
console.log(phoneNumber);
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar  />      
        <Routes>
          <Route exact path="/" element={<PhoneInputPage phoneNumber={phoneNumber}  setPhoneNumber={setPhoneNumber} handleNext={handleNext} />} />
          <Route path="/verify-otp" element={<OTPVerificationPage phoneNumber={phoneNumber} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pendingorder" element={<PendingOrder />}></Route>
          <Route path="placeorder" element={<}
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
