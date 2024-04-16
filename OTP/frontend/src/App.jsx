/* eslint-disable no-unused-vars */
// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PhoneInputPage from "./Components/PhoneInputPage";
import OTPVerificationPage from "./Components/OTPVerificationPage";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import axios from "axios";
import PendingOrder from "./Pages/PendingOrder";
import NewOrder from "./Pages/NewOrder";
import Profile from "./Pages/Profile";
import data from "./data";
import DeliverOrder from "./Pages/DeliverOrder";
function App() {
  const [orderdata, setOrderdata] = useState(data);

  const [phoneNumber, setPhoneNumber] = useState("");
  const handleNext = () => {
    axios
      .post("http://localhost:5000/getphoneno", { phoneNumber })
      .then((response) => {
        if (response.data.success) {
          console.log("OTP Generated successful");
        } else {
          console.log("OTP Generated failed");
        }
      })
      .catch((error) => {
        console.error("Error sending data to server:", error);
      });
  };

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PhoneInputPage
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                handleNext={handleNext}
              />
            }
          />
          <Route
            path="/verify-otp"
            element={<OTPVerificationPage phoneNumber={phoneNumber} />}
          />
          <Route
            path="/pendingorder"
            element={<PendingOrder orderdata={orderdata} />}
          ></Route>
          <Route
            path="/neworder"
            element={<NewOrder orderdata={orderdata} />}
          ></Route>
          <Route
            path="/deliverorder"
            element={<DeliverOrder orderdata={orderdata} />}
          ></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<PhoneInputPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
