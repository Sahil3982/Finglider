/* eslint-disable no-unused-vars */
import React from 'react';
import DashboardNavbar from './DashbordNavbar';

const Dashboard = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl mb-4">Food Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Sample Food Categories */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="category1.jpg" alt="Category 1" className="w-full h-32 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Category 1</h2>
            <p>Description of category 1...</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="category2.jpg" alt="Category 2" className="w-full h-32 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Category 2</h2>
            <p>Description of category 2...</p>
          </div>
        </div>
        {/* Add more food categories as needed */}

        {/* Sample Popular Dishes */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="dish1.jpg" alt="Dish 1" className="w-full h-32 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Dish 1</h2>
            <p>Description of dish 1...</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="dish2.jpg" alt="Dish 2" className="w-full h-32 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Dish 2</h2>
            <p>Description of dish 2...</p>
          </div>
        </div>
        {/* Add more popular dishes as needed */}
      </div>
    </div>
    </>
  
  );
};

export default Dashboard;
