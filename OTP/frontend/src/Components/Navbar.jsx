/* eslint-disable no-unused-vars */
// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-red-500 py-4">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-white text-red-500 font-bold text-xl">FoodieHub</Link>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex items-center">
          <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
          <Link to="/recipes" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Recipes</Link>
          <Link to="/categories" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Categories</Link>
          <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
