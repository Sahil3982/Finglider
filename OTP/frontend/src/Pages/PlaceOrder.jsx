/* eslint-disable no-unused-vars */
// src/OrderForm.js
import React, { useState } from 'react';

const PlaceOrder = () => {
  const [recipe, setRecipe] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission logic
    console.log('Order submitted:', recipe, quantity, message);
    // Reset form fields
    setRecipe('');
    setQuantity('');
    setMessage('');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Place Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Recipe:</label>
          <input
            className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            type="text"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Quantity:</label>
          <input
            className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message:</label>
          <textarea
            className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PlaceOrder;
