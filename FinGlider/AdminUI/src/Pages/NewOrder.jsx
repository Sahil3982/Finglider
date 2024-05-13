/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// NewOrder.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faUser,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import RejectPopUp from "../Components/RejectPopUp";
import Sorting from "../Components/Sorting";

const NewOrder = ({ orderdata, onAccept }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null); // Add state to track selected order ID
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [toggleBtnVisible, setToggleBtnVisible] = useState(true); // State for toggle button visibility
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);
  console.log(filteredOrders);

  const handleReject = (id) => {
    setSelectedOrderId(id); // Set the selected order ID
    setShowPopup(true); // Show the rejection popup
  };

  const handleScroll = (e) => {
    e.stopPropagation(); // Prevent the wheel event from bubbling up
  };

  const toggleAccordion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleAccept = (id) => {
    onAccept(id);
  };

  const handleToggleClick = () => {
    setToggleBtnVisible(!toggleBtnVisible); // Hide toggle button when clicked
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(query);
    const filtered = orderdata.filter((order) =>
      order.customerName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredOrders(filtered);
  };

  const ordersToRender = searchQuery ? filteredOrders : orderdata;

  return (
    <>
      <div className="flex justify-center justify-between pl-4 align-center">
        <SearchBar onSearch={handleSearch} />

        <div className="pt-2">
          <Sorting />

          <Link to="/dashboard" className="text-xl m-2 pr-2 font-bold mb-4">
            {/* <FontAwesomeIcon
              icon={faBackward}
              size="lg"
              style={{ color: "#000000" }}
            /> */}
          </Link>
        </div>
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
              onClick={() =>
               {toggleAccordion(index)
                handleToggleClick()}}
              className="cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "#000000" }}
                className="size-4 pr-2"
              />
              <span className="font-bold">{customerName}</span>
              <br />
              <span className="font-bold">Order ID: </span>
              <span className="text-red-500">{OrderID}</span>
              <br />
              <span className="font-bold"> Order Date : </span>
              <span className="text-purple-700">{date}</span>
              <br />
              <span className="font-bold text">Order Status :</span>{" "}
              <span className="text-blue-500">{status}</span>
              <br />
              <div className="font-bold">
                Total Price:{" "}
                {Array.isArray(items)
                  ? items.reduce((total, item) => total + Number(item.price), 0)
                  : 0}
              </div>
              <span
                className="left-8 ml-24"
              >
                {toggleBtnVisible && (
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    style={{ color: "#000000" }}
                  />
                )}
              </span>
              {expandedIndex === index && (
                <div>
                  <span className="font-bold"> Products : </span>
                  {items.map((data, index) => (
                    <div key={index}>
                      <table className="">
                        {index === 0 && (
                          <tr className="bg-gray-300 ">
                            <th className="p-1 ">S.No.</th>
                            <th className="p-1">Dish Name</th>
                            <th className="p-1">Quantity</th>
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

                  <div className="font-bold ml-1">
                    Total :{" "}
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
        <RejectPopUp
          orderId={selectedOrderId} // Pass selected order ID to the popup
          onClose={handleClosePopup} // Close the popup
          onReject={handleReject} // Pass the reject handler function to the popup
        />
      )}
    </>
  );
};

export default NewOrder;
