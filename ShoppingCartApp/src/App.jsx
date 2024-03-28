import React, { useState } from 'react';

const itemsList = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 15 },
  { id: 3, name: 'Product 3', price: 20 },
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Items List */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Items</h2>
          <ul className="space-y-2">
            {itemsList.map(item => (
              <li key={item.id} className="flex items-center justify-between border-b pb-2">
                <img src={} />
                <span>{item.name} - ${item.price}</span>
                <button onClick={() => addToCart(item)} className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
        {/* Cart List */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Cart</h2>
          <ul className="space-y-2">
            {cartItems.map(item => (
              <li key={item.id} className="flex items-center justify-between border-b pb-2">
                <span>{item.name} - ${item.price} x {item.quantity}</span>
                <div className="flex items-center">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200 text-gray-700 rounded">-</button>
                  <span className="px-2">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 text-gray-700 rounded">+</button>
                  <button onClick={() => removeFromCart(item.id)} className="ml-2 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600">Remove</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
