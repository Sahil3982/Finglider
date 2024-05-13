/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-red-500 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-red-500 font-bold text-xl">
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ color: "#999999" }}
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <Link
              to="/dashboard"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              DashBoard
            </Link>
            <Link
              to="/neworder"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              NewOrder
            </Link>
            <Link
              to="/pendingorder"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              PendingOrder
            </Link>
            <Link
              to="/profile"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Profile
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-300 hover:text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
