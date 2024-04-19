/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const NewOrder = ({ orderdata, onAccept }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [rejectedOrderId, setRejectedOrderId] = useState(null);
  // const [showPopup, setShowPopup] = useState(true);
  const [selectedReason, setSelectedReason] = useState('');
  const [customReason, setCustomReason] = useState('');

  const handleClosePopup = () => {
    // Handle closing the popup and process the selected and custom reasons
    // For example:
    console.log("Selected Reason:", selectedReason);
    console.log("Custom Reason:", customReason);
    setShowPopup(false);
  };

  const handleReject = (id) => {
    // Set the rejected order ID and show the popup
    setRejectedOrderId(id);
    setShowPopup(true);
  };

  // const handleClosePopup = () => {
  //   // Hide the popup
  //   setShowPopup(false);
  //   // Call the onDelete function with the ID of the rejected order
  // };

  const handleAccept = (id) => {
    // Call the onAccept function with the ID of the accepted order
    onAccept(id);
  };

  return (
    <>
      <h2 className="text-xl m-2 font-bold mb-4">New Orders</h2>

      {orderdata.map(
        ({ customerName, id, status, items, date, OrderID }) =>
          status === "Processing" && (
            <div
              key={id}
              className="bg-white rounded-lg overflow-hidden shadow-lg p-5 mb-4 mx-4 flex items-center justify-between"
            >
              <div>
                <span className="text-2xl">{customerName}</span>
                <br />
                <div>
                  <span>{items} </span>
                  <br />
                  <span>ORDERID : {OrderID}</span>
                  <br />

                  <span className="font-bold">DATE : {date} </span>
                </div>
                <span>Status: {status}</span>
              </div>
              <div>
                <button
                  className="bg-green-500 p-2 m-2 px-5 rounded-lg overflow-hidden shadow-lg"
                  onClick={() => handleAccept(id)}
                >
                  Accept
                </button>
                <button
                  className="bg-red-500 p-2 m-2 px-5 rounded-lg overflow-hidden shadow-lg"
                  onClick={() => handleReject(id)}
                >
                  Reject
                </button>
              </div>
            </div>
          )
      )}
      {showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded">
          <input 
            type="radio" 
            name="reason" 
            value="Not Available" 
            checked={selectedReason === "Not Available"}
            onChange={(e) => setSelectedReason(e.target.value)}
          /> Not Available
          <br />
          <input 
            type="radio" 
            name="reason" 
            value="Delivery issues" 
            checked={selectedReason === "Delivery issues"}
            onChange={(e) => setSelectedReason(e.target.value)}
          /> Delivery issues
          <br />
          <input 
            type="radio" 
            name="reason" 
            value="Other" 
            checked={selectedReason === "Other"}
            onChange={(e) => setSelectedReason(e.target.value)}
          /> Other
          {selectedReason === "Other" && (
            <div>
              <textarea
                className="w-full text-red-400 border"
                placeholder="Please give a reason"
                value={customReason}
                onChange={(e) => setCustomReason(e.target.value)}
              ></textarea>
            </div>
          )}
          <p className="text-xl">
            Are you sure you want to reject this order?
          </p>
          <div className="flex justify-center mt-4">
            <button
              className="bg-green-500 p-2 m-2 rounded-lg overflow-hidden shadow-lg"
              onClick={handleClosePopup}
            >
              Yes
            </button>
            <button
              className="bg-red-500 p-2 m-2 rounded-lg overflow-hidden shadow-lg"
              onClick={() => setShowPopup(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    )}

    </>
  );
};

export default NewOrder;
