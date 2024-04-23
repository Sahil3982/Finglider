
import React, { createContext, useContext, useState } from 'react';



const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemQuantities, setItemQuantities] = useState({});

  
  const updateTotalPrice = (priceChange) => {
     const numericChange = parseFloat(priceChange);
     if (!isNaN(numericChange)) {
      setTotalPrice((prevTotal) => prevTotal + numericChange);
    } else {
      console.error('Invalid numeric value:', priceChange);
    }
  };

  const resetTotalPrice = () => {
    setTotalPrice(0);
  };

  const updateQuantity = (itemId, newQuantity) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };


  return (
    <CartContext.Provider value={{ totalPrice, updateTotalPrice, resetTotalPrice,itemQuantities, setItemQuantities,updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
