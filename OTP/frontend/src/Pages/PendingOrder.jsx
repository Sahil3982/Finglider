/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PendingOrder = ({ newOrders }) => {
  console.log(newOrders);

  return (
    <>
      <div className="flex justify-center justify-between">
        <h2 className="text-xl m-2 font-bold mb-4">Pending Orders</h2>
        <Link to="/neworder" className="text-xl m-2 font-bold mb-4">
        <FontAwesomeIcon icon={faBackward} size="lg" style={{color: "#000000",}} />

        </Link>
      </div>

      <SearchBar />
      {newOrders.map(
        ({ customerName, id, status, items }) =>
          status === "inprogress" && (
            <div
              key={id}
              className="bg-white rounded-lg overflow-hidden shadow-lg p-5 mb-4 mx-4 flex items-center justify-between"
            >
              <div>
                <span className="text-2xl">{customerName}</span>
                <br />
                <div>
                  <span>{items}</span>
                </div>
                <span>Status: {status}</span>
              </div>
              <div>
                <button className="bg-gray-500 p-2 m-2 rounded-lg overflow-hidden shadow-lg">
                  Ready for Delivery
                </button>
              </div>
            </div>
          )
      )}
    </>
  );
};

export default PendingOrder;
