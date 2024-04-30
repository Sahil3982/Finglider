/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
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
  const [toggleBtnVisible, setToggleBtnVisible] = useState(true); // State for toggle button visibility
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const totalPrice = useRef(0);
  const handleScroll = (e) => {
    e.stopPropagation(); // Prevent the wheel event from bubbling up
  };
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

  const handleToggleClick = () => {
    setToggleBtnVisible(!toggleBtnVisible); // Hide toggle button when clicked
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = orderdata.filter((order) =>
      order.customerName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredOrders(filtered);
  };

  const ordersToRender = searchQuery ? filteredOrders : orderdata;

  return (
    <>
      <div className="flex justify-center justify-between pl-4 align-center">
        {/* <h2 className="text-xl m-2 font-bold mb-4">New Orders</h2> */}
        <SearchBar onSearch={handleSearch} />
        <Link to="/dashboard" className="text-xl m-3 pr-2 font-bold mb-4">
          <FontAwesomeIcon
            icon={faBackward}
            size="lg"
            style={{ color: "#000000" }}
          />
        </Link>
      </div>

      {ordersToRender.map(
        (
          { customerName, id, status, items, date, OrderID, address },
          index
        ) => (
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
              <span className="  ">
                {toggleBtnVisible && (
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    style={{ color: "#000000" }}
                    onClick={handleToggleClick} // Hide toggle button when clicked
                  />
                )}
              </span>
              {expandedIndex === index && (
                <div>
                  <span className="font-bold"> Products : </span>
                  {items.map((data, index) => (
                    <div key={index}>
                      <table className="">
                        {index === 0 && ( // Render table header only for the first item
                          <tr className="bg-gray-300 ">
                            <th className="p-1 ">S.No.</th>
                            <th className="p-1">Dish Name</th>
                            <th className="p-1">Category</th>
                            <th className="p-1">Price</th>
                          </tr>
                        )}
                        <tr className="border-b  text--900">
                          <td className="px-6 bg-green-100">{data.sno}</td>
                          <td className="px-8 bg-yellow-100">{data.dish}</td>
                          <td className="px-9 bg-blue-100">{data.category}</td>
                          <td className="px-8 bg-pink-100">{data.price}</td>
                        </tr>
                      </table>
                    </div>
                  ))}

                  <div className="font-bold">
                    Total Price:{" "}
                    {items.reduce(
                      (total, item) => total + Number(item.price),
                      0
                    )}
                  </div>
                  <br />
                  <span className="font-bold"> Customer Address :</span>
                  <span className="text-green-700"> {address}</span>
                  <br />
                </div>
              )}
            </div>
            <div className="">
              <button
                className="bg-green-600 text-light-800  p-2 mx-4 m-1 px-5 rounded-sm overflow-hidden shadow-lg"
                onClick={() => handleAccept(id)}
              >
                Accept
              </button>
              <button
                className="bg-red-600 p-2 m-2 px-5 rounded-sm overflow-hidden shadow-lg"
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
        <div className="bg-white p-8 rounded" onWheel={handleScroll}>
          <div className="scrollable-popup-content" style={{ maxHeight: "300px", overflowY: "auto" }}>
            <select
              className="w-full p-2 border rounded-md"
              value={selectedReason}
              onChange={(e) => setSelectedReason(e.target.value)}
            >
              <option value="Not Available">Not Available</option>
              <option value="Delivery issues">Delivery issues</option>
              <option value="Backend issues">Backend issues</option>
              <option value="Material not available">Material not available</option>
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
      </div>
      )}
    </>
  );
};

export default NewOrder;
