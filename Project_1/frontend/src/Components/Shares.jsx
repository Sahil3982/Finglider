import React from 'react';
import img from '../assets/img1.jpg'
const Shares = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4">Shares</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Example share cards */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={img} alt="Placeholder" className="w-full h-40 object-cover mb-4 rounded-md" />
          <h3 className="text-lg font-semibold">CISCO </h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel mauris leo.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={img} alt="Placeholder" className="w-full h-40 object-cover mb-4 rounded-md" />
          <h3 className="text-lg font-semibold">Gray Orange</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel mauris leo.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={img} alt="Placeholder" className="w-full h-40 object-cover mb-4 rounded-md" />
          <h3 className="text-lg font-semibold">Infosys</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel mauris leo.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={img} alt="Placeholder" className="w-full h-40 object-cover mb-4 rounded-md" />
          <h3 className="text-lg font-semibold">Meta</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel mauris leo.</p>
        </div>
      </div>
    </div>
  );
};

export default Shares;
