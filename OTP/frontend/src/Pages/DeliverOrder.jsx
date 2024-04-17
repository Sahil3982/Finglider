/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const DeliverOrder = ({ orderdata }) => {
  return (
    <>
      <h2 className="text-xl m-2 font-bold mb-4">Deliver Order</h2>

      {orderdata.map(
        ({ customerName, id, status, items ,address}) =>
          status == "Delivered" && (
            <div
              key={id}
              className="bg-white rounded-lg overflow-hidden shadow-lg p-5 mb-4 mx-4 flex items-center justify-between"
            >
              <div>
                <span className="text-2xl">{customerName}</span>
                <br />
                <div>
                  <span>{items} </span>
                </div>
                <span>Address: {address}</span>
              </div>
              <div>
                <button className="bg-blue-500 p-2 m-2 rounded-lg overflow-hidden shadow-lg">
                  Delivered
                </button>
                <button className="bg-red-500 p-2 m-2 rounded-lg overflow-hidden shadow-lg">
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
