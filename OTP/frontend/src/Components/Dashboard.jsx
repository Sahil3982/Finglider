/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
const Dashboard = ({ orderdata }) => {
  let countProcessing = 0;
  let countDelivered = 0;
  let countPending = 0;
  orderdata.forEach((order) => {
    if (order.status === "Processing") {
      countProcessing++;
    } else if (order.status === "Delivered") countDelivered++;
    else if (order.status === "inprogress") countPending++;
  });
  console.log(countProcessing, countDelivered, countPending);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/newOrder">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWudSbCTZI3wjU1helV5Nin2RuWc6O_KlytQ&s"
                alt="Category 2"
                className="w-full h-32 object-cover"
              />
              <div className="p-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold mb-2">New Orders</h2>
                <h1 className="text font-semibold mb-2 bg-blue-500 p-2  px-3 rounded-full">
                  {countProcessing}
                </h1>
              </div>
            </div>
          </Link>
          <Link to="/pendingOrder">
            {" "}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="data:image/png;base64,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"
                alt="Category 1"
                className="w-full h-32 object-cover"
              />
             <div className="p-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold mb-2">Pending Orders</h2>
                <h1 className="text font-semibold mb-2 bg-blue-500 p-2  px-3 rounded-full">
                  {countPending}
                </h1>
              </div>
              </div>
          </Link>
          <Link to="/deliverorder">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="data:image/png;base64,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"
                alt="Category 2"
                className="w-full h-32 object-cover"
              />
              <div className="p-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold mb-2">Deliver Orders</h2>
                <h1 className="text font-semibold mb-2 bg-blue-500 p-2 px-3 rounded-full">
                  {countDelivered}
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
