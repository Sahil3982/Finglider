/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const RejectPopUp = ({ orderId, onClose, onReject }) => {
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");

  const handleScroll = (e) => {
    e.stopPropagation(); // Prevent the wheel event from bubbling up
  };

  const handleReject = () => {
    // Handle rejection with the selected or custom reason
    onReject(orderId, selectedReason || customReason); // Pass orderId and reason to onReject
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">

      <div className="bg-white p-8  rounded" onWheel={handleScroll}>
      <div className="font-bold font-2xl m-2">Rejcetion Popup</div>

        <div
          className="scrollable-popup-content"
          style={{ maxHeight: "300px", overflowY: "auto" }}
        >

          <select
            className="w-full p-1 border rounded-md"
            value={selectedReason}
            onChange={(e) => setSelectedReason(e.target.value)}
          >
            <option value="Not Available">Not Available</option>
            <option value="Delivery issues">Delivery issues</option>
            <option value="Backend issues">Backend issues</option>
            <option value="Material not available">
              Material not available
            </option>
            <option value="Other">Other</option>
          </select>
          {selectedReason === "Other" && (
            <div>
              <textarea
                className="w-full p-2 mt-2 border rounded-md"
                placeholder="Please give a reason"
                value={customReason}
                onChange={(e) => setCustomReason(e.target.value)}
              ></textarea>
            </div>
          )}
        </div>
        <div className="py-2 pt-4"> Are you sure for rejecting order</div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-green-500 p-2 m-2 rounded-lg shadow-lg"
            onClick={handleReject}
          >
            Yes
          </button>
          <button
            className="bg-red-500 p-2 m-2 rounded-lg shadow-lg"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default RejectPopUp;
