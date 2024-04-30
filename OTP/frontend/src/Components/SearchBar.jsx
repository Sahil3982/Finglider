/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="flex justify-center items-center my-2 ">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          className="p-2 border border-gray-300  rounded-sm mr-2 "
        />
        {/* <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Search
        </button> */}
      </form>
    </div>
  );
};

export default SearchBar;
