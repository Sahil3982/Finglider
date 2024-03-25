import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <div>
            <a href="#" className="text-gray-300 hover:text-white px-2">About</a>
            <a href="#" className="text-gray-300 hover:text-white px-2">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white px-2">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
