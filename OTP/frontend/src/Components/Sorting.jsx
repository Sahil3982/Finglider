/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

const Sorting = () => {
  return (
    <div className="relative inline-block">
      <select
        id="sort-select"
        className="appearance-none border border-gray-300 rounded-md py-2 pl-3 pr-5 text-sm leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150"
      >
        <option disabled selected hidden>
          Sort By
        </option>
        <option>Date</option>
        <option>Price</option>
        <option>Quantity</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
        <FontAwesomeIcon icon={faSort} className="h-4 w-4" />
      </div>
    </div>
  );
};

export default Sorting;
