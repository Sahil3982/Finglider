import React from "react";
import Shares from "../Components/Shares";
import Subscribe from "../Components/Suscribe";
import Views from "../Components/Views";

const Dashboard = () => {
  return (
    <>
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p>This is the Dashboard page content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel mauris leo. Proin id metus nec nisl dignissim pharetra. Nulla eu ante eget odio vestibulum lacinia vel non ipsum. Curabitur vel volutpat nisl. Nulla facilisi. Duis tincidunt augue ac eros aliquam, eu eleifend dolor vestibulum.</p>
    </div>
    <Shares />
    <Subscribe />
    <Views />
    </>
  );
}

export default Dashboard;
