/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Draggable from "react-draggable";

function RejectPopUp({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="w-full p-2 border rounded-md text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full border rounded-md bg-white shadow">
          {options.map((option) => (
            <div
              key={option}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MyPopup() {
  const [showPopup, setShowPopup] = useState(true);
  const [selectedReason, setSelectedReason] = useState("Not Available");
  const [customReason, setCustomReason] = useState("");

  const handleClosePopup = () => {
    // Handle closing popup
  };

  const options = [
    "Not Available",
    "Delivery issues",
    "Backend issues",
    "Material not available",
    "Other"
  ];

  return (
    <Draggable>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded">
          <div className="popup-content" style={{ maxHeight: "300px", overflowY: "auto" }}>
            <CustomDropdown
              options={options}
              value={selectedReason}
              onChange={(value) => setSelectedReason(value)}
            />
          </div>
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
          Are you sure
          <div className="flex justify-center mt-4">
            <button
              className="bg-green-500 p-2 m-2 rounded-lg shadow-lg"
              onClick={handleClosePopup}
            >
              Yes
            </button>
            <button
              className="bg-red-500 p-2 m-2 rounded-lg shadow-lg"
              onClick={() => setShowPopup(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default RejectPopUp;
