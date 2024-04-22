/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
const DeliverOrder = ({ orderdata }) => {
  return (
    <>
      <h2 className="text-xl m-2 font-bold mb-4">Deliver Order</h2>

      {orderdata.map(
        ({ customerName, id, status, items ,address,OrderID , date,TotalAmount}) =>
          status == "Delivered" && (
            <div
              key={id}
              className="bg-white rounded-lg overflow-hidden shadow-lg p-5 mb-4 mx-4 flex items-center justify-between"
            >
              <div>
                {/* <span className="text-2xl">{customerName}</span> */}
                
                  {/* <span>{items} </span><br></br> */}
                  <span>ORDERID : {OrderID}</span><br></br>

                  <span>  DATE : {date} </span><br></br>
                
                <span>Address: {address}</span><br></br>
                <span className="font-bold">TOTAL : {TotalAmount} </span>

              </div>
              <div>
                <button className="bg-blue-500 p-2 m-2 rounded-lg overflow-hidden shadow-lg">
                  Delivered
                </button>
                <button className="bg-red-500 p-2 m-2 rounded-lg overflow-hidden shadow-lg">
                 Out of Delivery
                </button>
                <Link to={`/viewdetails/${id}`}>
                  <button className="bg-gray-500 p-2 m-2 px-5 rounded-lg overflow-hidden shadow-lg">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          )
      )}
    </>
  );
};

export default DeliverOrder;
