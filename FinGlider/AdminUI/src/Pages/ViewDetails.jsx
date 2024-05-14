/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = ({ orderdata }) => {
  const { orderId } = useParams();

  const order = orderdata.find(order => order.id === orderId);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="relative bg-white rounded-lg p-6">
            <button className="absolute top-0 right-0 m-4" onClick={() => window.history.back()}>
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">Order Details</h2>
            {order ? (
              <>
                <p className="mb-2"><span className="font-semibold">Customer Name:</span> {order.customerName}</p>
                <p className="mb-2"><span className="font-semibold">Address:</span> {order.address}</p>
                <p className="mb-2"><span className="font-semibold">Items:</span> {order.items}</p>
                <p className="mb-2"><span className="font-semibold">Order ID:</span> {order.OrderID}</p>
                <p className="mb-2"><span className="font-semibold">Total Amount:</span> ${order.TotalAmount}</p>
                <p className="mb-2"><span className="font-semibold">Date:</span> {order.date}</p>
                <p className="mb-2"><span className="font-semibold">Status:</span> {order.status}</p>
              </>
            ) : (
              <p className="text-red-500">No details found for this order.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
