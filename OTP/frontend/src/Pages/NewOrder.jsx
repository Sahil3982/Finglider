/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewOrder = ({ orderdata, onAccept ,onDetails }) => {

  console.log(onAccept);
  const [showPopup, setShowPopup] = useState(false);
  const [rejectedOrderId, setRejectedOrderId] = useState(null);
  // const [showPopup, setShowPopup] = useState(true);
  const [selectedReason, setSelectedReason] = useState('');
  const [customReason, setCustomReason] = useState('');

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
const  handleDetails = (id)=>{
      onDetails(id);
      console.log(id);

}
 

  return (
    <>
      <h2 className="text-xl m-2 font-bold mb-4">New Orders</h2>

      {orderdata.map(
        ({ customerName, id, status, items, date, OrderID }) =>
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
                  <br />
                  <span>ORDERID : {OrderID}</span>
                  <br />

                  <span className="font-bold">DATE : {date} </span>
                </div>
                <span>Status: {status}</span>
              </div>
              <div>
                <button
                  className="bg-green-500 p-2 m-2 px-5 rounded-lg overflow-hidden shadow-lg"
                  onClick={() => handleAccept(id)} 
                >
                  Accept
                </button>
                <button
                  className="bg-red-500 p-2 m-2 px-5 rounded-lg overflow-hidden shadow-lg"
                  onClick={() => handleReject(id)}
                >
                  Reject
                </button>
                
                <Link to='/viewdetails'>
                <button
                  className="bg-gray-500 p-2 m-2 px-5 rounded-lg overflow-hidden shadow-lg"
                  onClick={()=> handleDetails(id)}
                >
                  View Details 
                </button>
                </Link>
              </div>
            </div>
          )
      )}
      {showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded">
          <input 
            type="radio" 
            name="reason" 
            value="Not Available" 
            checked={selectedReason === "Not Available"}
            onChange={(e) => setSelectedReason(e.target.value)}
          /> Not Available
          <br />
          <input 
            type="radio" 
            name="reason" 
            value="Delivery issues" 
            checked={selectedReason === "Delivery issues"}
            onChange={(e) => setSelectedReason(e.target.value)}
            
          /> Delivery issues
          <br />
          <input 
            type="radio" 
            name="reason" 
            value="Delivery issues" 
            checked={selectedReason === "Delivery issues"}
            onChange={(e) => setSelectedReason(e.target.value)}
          /> Backend issues
          <br />
          <input 
            type="radio" 
            name="reason" 
            value="Delivery issues" 
            checked={selectedReason === "Delivery issues"}
            onChange={(e) => setSelectedReason(e.target.value)}
          /> Material not avilable
          <br />
          <input 
            type="radio" 
            name="reason" 
            value="Other" 
            checked={selectedReason === "Other"}
            onChange={(e) => setSelectedReason(e.target.value)}
          /> Other
          {selectedReason === "Other" && (
            <div>
              <textarea
                className="w-full text-red-400 border"
                placeholder="Please give a reason"
                value={customReason}
                onChange={(e) => setCustomReason(e.target.value)}
              ></textarea>
            </div>
          )}
          <p className="text-xl">
            Are you sure you want to reject this order?
          </p>
          <div className="flex justify-center mt-4">
            <button
              className="bg-green-500 p-2 m-2 rounded-lg overflow-hidden shadow-lg"
              onClick={handleClosePopup}
            >
              Yes
            </button>
            <button
              className="bg-red-500 p-2 m-2 rounded-lg overflow-hidden shadow-lg"
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
