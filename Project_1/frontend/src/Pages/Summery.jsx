import React from "react";
import img3 from '../assets/img3.jpg'

const Summery = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Summary</h2>
      <p>This is the Summary page content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel mauris leo. Proin id metus nec nisl dignissim pharetra. Nulla eu ante eget odio vestibulum lacinia vel non ipsum. Curabitur vel volutpat nisl. Nulla facilisi. Duis tincidunt augue ac eros aliquam, eu eleifend dolor vestibulum.</p>
      <img src={img3} alt="Placeholder" className="mt-4" />
    </div>
  );
}

export default Summery;
