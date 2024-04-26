import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faUser,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

const NewOrder = ({ orderdata, onAccept }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [rejectedOrderId, setRejectedOrderId] = useState(null);
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

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
        <Link to="/dashboard" className="text-xl m-2 font-bold mb-4">
          <FontAwesomeIcon
            icon={faBackward}
            size="lg"
            style={{ color: "#000000" }}
          />
        </Link>
      </div>

      {orderdata.map(
        (
          {
            customerName,
            id,
            status,
            items,
            date,
            OrderID,
            address,
            TotalAmount,
          },
          index
        ) =>
          status === "Processing" && (
            <div
              key={id}
              className="bg-white rounded-lg overflow-hidden shadow-lg px-3 py-1 mb-2 mx-4   items-center justify-between"
            >
              <div
                onClick={() => toggleAccordion(index)}
                className="cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "#000000" }}
                  className="size-4 pr-2"
                />
                <span className="font-bold">{customerName}</span>
                <br />
                <span className="font-bold">ORDER ID: </span>
                <span className="text-red-900">{OrderID}</span>
                <br />
                <span className="font-bold">DATE : </span>
                {date}
                <br />
                <span className="font-bold text">STATUS :</span>{" "}
                <span className="text-yellow-500">{status}</span>
                <br />
                <span className=" ml-24 ">
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    style={{ color: "#000000" }}
                  />
                </span>
                {expandedIndex === index && (
                  <div>
                    <span className="font-bold"> Products : </span>
                    {items.map((data, index) => (
                      <div key={index}>
                        {" "}
                        {/* Added key prop */}
                        <table className="border-solid border-4 ml-4 p-4 ">
                       {
                        items.length === 3 &&
                        <tr>
                            <td>S.No.</td>
                            <td>S.No.</td>
                            <td>S.No.</td>
                            <td>S.No.</td>
                          </tr>
                       }
                          <tr>
                          <th>{data.sno}</th>
                          
                            <th>{data.dish}</th>
                            <th>{data.category}</th>

                            <th>{data.price}</th>
                          </tr>
                          
                        </table>
                      </div>
                    ))}
                    <br />
                    <span className="font-bold"> Customer Address :</span>{" "}
                    <span className="text-green-900"> {address}</span>
                    <br />
                    <span className="font-bold"> Total Amount : </span>
                    <span className="">{TotalAmount}</span>
                  </div>
                )}
              </div>
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
          )
      )}

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded">
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
