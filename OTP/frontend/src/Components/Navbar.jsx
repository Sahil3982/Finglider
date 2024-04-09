/* eslint-disable no-unused-vars */
// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <ul className="flex justify-center space-x-4">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link text-white">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link text-white">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
