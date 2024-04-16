/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {



  
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to='/pendingOrder'>
            {" "}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1z0d_Jke01v4ErGgNeyx8ROBp-v0TW3ZxBg&s"
                alt="Category 1"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Pending Order's </h2>
              </div>
            </div>
          </Link>
          <Link to="/newOrder">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKfCJq96hyvyFgjLHqCqAjVdL6wL2dbDT0g&s"
                alt="Category 2"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">New Order's</h2>
              </div>
            </div>
          </Link>
          <Link to="/deliverorder">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKfCJq96hyvyFgjLHqCqAjVdL6wL2dbDT0g&s"
                alt="Category 2"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Deliver Order's</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
