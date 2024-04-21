/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const ViewDetails = ( {orderdata , handleDetails}) => {
    console.log( "order data =>" ,orderdata[0].id);
    console.log("onAccpt =>",handleDetails);
  return (
    <>
     { orderdata.id=== handleDetails && orderdata.map(
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
              
            </div>
          )
      )}
    </>
  )
}

export default ViewDetails