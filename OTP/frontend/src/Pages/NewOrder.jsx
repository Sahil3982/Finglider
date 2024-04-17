/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const NewOrder = ({ orderdata, onDelete }) => {
  const handleReject = id => {
    // Call the onDelete function with the ID of the rejected order
    onDelete(id);
  };

  return (
    <>
      <h2 className="text-xl m-2 font-bold mb-4">New Orders</h2>

      {orderdata.map(
        ({ customerName, id, status, items }) =>
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
                </div>
                <span>Status: {status}</span>
              </div>
              <div>
                <button
                  className="bg-green-500 p-2 m-2 rounded-lg overflow-hidden shadow-lg"
                  onClick={() => console.log("Accept")}
                >
                  Accept
                </button>
                <button
                  className="bg-red-500 p-2 m-2 rounded-lg overflow-hidden shadow-lg"
                  onClick={() => handleReject(id)}
                >
                  Reject
                </button>
              </div>
            </div>
          )
      )}
    </>
  );
};

export default NewOrder;
