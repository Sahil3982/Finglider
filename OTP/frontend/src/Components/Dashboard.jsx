/* eslint-disable no-unused-vars */
import React from 'react';

const Dashboard = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl mb-4">Food Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1z0d_Jke01v4ErGgNeyx8ROBp-v0TW3ZxBg&s" alt="Category 1" className="w-full h-32 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Dish 1</h2>
            <p>Description of category 1...</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKfCJq96hyvyFgjLHqCqAjVdL6wL2dbDT0g&s" alt="Category 2" className="w-full h-32 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Dish 2</h2>
            <p>Description of category 2...</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg" alt="Dish 1" className="w-full h-32 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Dish 3</h2>
            <p>Description of dish 1...</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=x_0,y_0,h_720,w_1280,c_fill/w_800" alt="Dish 2" className="w-full h-32 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Dish 4</h2>
            <p>Description of dish 2...</p>
          </div>
        </div>
      </div>
    </div>
    </>
  
  );
};

export default Dashboard;
