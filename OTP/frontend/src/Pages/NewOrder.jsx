import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const NewOrder = ({ orderdata, onAccept }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [rejectedOrderId, setRejectedOrderId] = useState(null);
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null); // Moved the state for accordion outside Accordion component

  const toggleAccordion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const handleClosePopup = () => {
    console.log("Selected Reason:", selectedReason);
    console.log("Custom Reason:", customReason);
    setShowPopup(false);
  };

  const handleReject = (id) => {
    setRejectedOrderId(id);
    setShowPopup(true);
  };

  const handleAccept = (id) => {
    onAccept(id);
  };

  return (
    <>
      <div className="flex justify-center justify-between align-center">
        <h2 className="text-xl m-2 font-bold mb-4">New Orders</h2>
        <SearchBar />

        <Link
          to="/dashboard"
          className="text-xl m-2 font-bold mb-4"
          value="Back"
        >
          <FontAwesomeIcon
            icon={faBackward}
            size="lg"
            style={{ color: "#000000" }}
          />
        </Link>
      </div>

      {orderdata.map(
        (
          { customerName, id, status, items, date, OrderID, address },
          index // Added index as the second parameter
        ) =>
          status === "Processing" && (
            <div
              key={id}
              className="bg-white rounded-lg overflow-hidden shadow-lg px-3 py-1 mb-2 mx-4 flex  items-center justify-between"
            >
              <div
                onClick={() => toggleAccordion(index)} // Added onClick event to toggleAccordion
                className="cursor-pointer "
                placeholder=" kmvknvnekn"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "#000000" }}
                  className="size-4 pr-2"
                />
                <span className="font-bold">{customerName}</span>
                <br />
                <span className="font-bold">ORDER ID: </span>
                {OrderID}
                <br />
                <span className="font-bold">DATE : </span>
                {date}
                <br />
                <span className="font-bold text">STATUS :</span>{" "}
                <span className="text-yellow-500">{status}</span>
                <br />
                {/* Content to be displayed when accordion is expanded */}
                <span className="">
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    flip="vertical"
                    style={{ color: "#000000" }}
                  />
                </span>
                {expandedIndex === index && (
                  <div>
                    <span className="font-bold"> Products : </span>
                    {items}
                    <br />
                    <span className="font-bold"> Delivery Address :</span>{" "}
                    {address}
                    <br />
                    <span className="font-bold"> Total :</span>
                    {status}
                  </div>
                )}
                <div className="">
                  <button
                    className="bg-green-600  p-2 m-2 px-5 rounded-lg overflow-hidden shadow-lg"
                    onClick={() => handleAccept(id)}
                  >
                    Accept
                  </button>
                  <button
                    className="bg-red-600 p-2 m-2 px-5 rounded-lg overflow-hidden shadow-lg"
                    onClick={() => handleReject(id)}
                  >
                    Reject
                  </button>
                 
                </div>
              </div>
            </div>
          )
      )}

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded">
            {/* Radio buttons and other content for the rejection popup */}
            <select
              className="w-full p-2 border rounded-md"
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
      )}
    </>
  );
};

export default NewOrder;
