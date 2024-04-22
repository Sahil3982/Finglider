/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = ({ orderdata }) => {
  const { orderId } = useParams();

  const order = orderdata.find(order => order.id === orderId);

  return (
    <div className="container mx-auto px-4 py-8">
      {order ? (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Order Details</h2>
          <p className="mb-2"><span className="font-semibold">Customer Name:</span> {order.customerName}</p>
          <p className="mb-2"><span className="font-semibold">Address:</span> {order.address}</p>
          <p className="mb-2"><span className="font-semibold">Items:</span> {order.items}</p>
          <p className="mb-2"><span className="font-semibold">Order ID:</span> {order.OrderID}</p>
          <p className="mb-2"><span className="font-semibold">Total Amount:</span> ${order.TotalAmount}</p>
          <p className="mb-2"><span className="font-semibold">Date:</span> {order.date}</p>
          <p className="mb-2"><span className="font-semibold">Status:</span> {order.status}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p className="text-red-500">No details found for this order.</p>
      )}
    </div>
  );
};

export default ViewDetails;
