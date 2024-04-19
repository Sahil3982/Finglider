/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from "react";

const PendingOrder = ({ newOrders }) => {
 

 console.log(newOrders);
  return (
    <>
      <h2 className="text-xl m-2 font-bold mb-4">Pending Order</h2>

     
      { newOrders.map(
        ({ customerName, id, status, items }) =>
          status == "inprogress" && (
            
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
                {/* <button className="bg-green-500 p-2 m-2 rounded-lg overflow-hidden shadow-lg">
                  Confirmed
                </button> */}
                <button className="bg-gray-500 c p-2 m-2 rounded-lg overflow-hidden shadow-lg">
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
