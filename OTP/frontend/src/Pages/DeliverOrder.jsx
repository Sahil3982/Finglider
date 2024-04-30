/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretUp } from "@fortawesome/free-solid-svg-icons";
const DeliverOrder = ({ orderdata, onAccept }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [toggleBtnVisible, setToggleBtnVisible] = useState(true); // State for toggle button visibility
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const totalPrice = useRef(0);

  const toggleAccordion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
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
        <SearchBar />

        <Link to="/pendingorder" className="text-xl m-2 font-bold mb-4">
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
              <button className="bg-blue-500 p-2 m-2 rounded-sm overflow-hidden ">
                Delivered
              </button>
              <button className="bg-red-500 p-2 m-2 rounded-sm overflow-hidden ">
                Out of Delivery
              </button>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default DeliverOrder;
