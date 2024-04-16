/* eslint-disable no-undef */
import React from "react";

const PendingOrder = ({ orderdata }) => {
 
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Pending Order</h2>

      {orderdata.map(({ fullname, id, address }) => (
        <div
          key={id}
          className="bg-white rounded-lg overflow-hidden shadow-lg p-5 mb-4 mx-4"
        >
          <span className="text-2xl">{fullname}</span>
          <br />
          <span>{address}</span>
          <button
            className="bg-blue-500 p-2 m-2 ml-20 rounded-lg overflow-hidden shadow-lg"
            onClick={() => handleAccept(id)}
          >
            Accepted
          </button>
         
          <button
            className="bg-red-500 p-2 m-2 rounded-lg overflow-hidden shadow-lg"
            onClick={() => handleReject(id)} 
          >
            Reject
          </button>
        </div>
      ))}
    </>
  );
};

export default PendingOrder;
