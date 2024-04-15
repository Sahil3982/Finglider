/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const PendingOrder = ({ order }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-4">Pending Order</h2>
      <p><strong>Recipe:</strong> {order.recipe}</p>
      <p><strong>Quantity:</strong> {order.quantity}</p>
      <p><strong>Message:</strong> {order.message}</p>
      <p><strong>Status:</strong> Pending</p>
    </div>
  );
};

export default PendingOrder;
