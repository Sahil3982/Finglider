import React from 'react';

const CartList = ({ cartItems, removeItemFromCart, updateQuantity }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Cart List</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="flex items-center justify-between border-b py-2">
            <div className="flex items-center">
              <span className="mr-2">{item.name}</span>
              <span className="text-gray-500">${item.price}</span>
            </div>
            <div className="flex items-center">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200 text-gray-700 rounded">-</button>
              <span className="px-2">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 text-gray-700 rounded">+</button>
              <button onClick={() => removeItemFromCart(item.id)} className="ml-2 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600">Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartList;
