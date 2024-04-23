/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
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
import ViewDetails from "./Pages/ViewDetails";

function App() {
  const [newOrders, setNewOrders] = useState(
    data.filter((order) => order.status === "Processing")
  );
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

  const handleAccept = (orderId) => {
    // Handle accepting order logic here
    const acceptedOrder = newOrders.find((order) => order.id === orderId);
  };

  const handleDetails = (id) => {
    console.log("Selected order ID:", id);
    // You can perform actions based on the selected order ID here
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
            element={<PendingOrder newOrders={newOrders} />}
          />
          {/* <Route
            path="/neworder"
            element={
              <NewOrder
                orderdata={orderdata}
                onAccept={handleAccept}
                onDetails={handleDetails}
              />
            }
          /> */}
          <Route
            path="/deliverorder"
            element={<DeliverOrder orderdata={orderdata} />}
          />
          <Route
            path="/rejectedorder"
            element={<RejectedOrder orderdata={orderdata} />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard orderdata={orderdata} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<PhoneInputPage />} />
          <Route
            path="/neworder"
            element={<NewOrder orderdata={orderdata} />}
          />
          {/* Pass the orderdata to ViewDetails component */}
          <Route
            path="/viewdetails/:orderId"
            element={<ViewDetails orderdata={orderdata} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
