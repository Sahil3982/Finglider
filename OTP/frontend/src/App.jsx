/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// src/App.js
import React, {useEffect, useState } from "react";
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
import RejectedOrder from "./Pages/RejectedOrder";
function App() {
  const [newOrders, setNewOrders] = useState(data.filter(order => order.status === "Processing"));
  const [pendingOrders, setPendingOrders] = useState([]);
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


  // const [acceptedOrders, setAcceptedOrders] = useState([]);

    const handleAccept = (orderId) => {
    // Find the accepted order
    const acceptedOrder = newOrders.find((order) => order.id === orderId);
    // Move the order to pending orders
    setPendingOrders(prevPendingOrders => [...prevPendingOrders, acceptedOrder]);
    // Remove the order from new orders
    setNewOrders(prevNewOrders => prevNewOrders.filter(order => order.id !== orderId));
  };
  useEffect(() => {
  }, [newOrders]);

console.log(newOrders);
// console.log(orderdata);

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
            element={<PendingOrder newOrders={newOrders} />}
          ></Route>
          <Route
            path="/neworder"
            element={<NewOrder orderdata={orderdata} onAccept={handleAccept} />}
          ></Route>
          <Route
            path="/deliverorder"
            element={<DeliverOrder orderdata={orderdata} />}
          ></Route>
          <Route
            path="/rejectedorder"
            element={<RejectedOrder orderdata={orderdata} />}
          ></Route>
          <Route
            path="/dashboard"
            element={<Dashboard orderdata={orderdata} />}
          ></Route>

          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<PhoneInputPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
