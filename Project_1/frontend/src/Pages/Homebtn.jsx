import React from "react";

const Homebtn = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-600 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 py-8 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Welcome Home!</h2>
        <p className="text-lg mb-8">This is the Home page content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel mauris leo. Proin id metus nec nisl dignissim pharetra. Nulla eu ante eget odio vestibulum lacinia vel non ipsum. Curabitur vel volutpat nisl. Nulla facilisi.</p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition duration-300">Learn More</button>
      </div>
    </div>
  );
}

export default Homebtn;
