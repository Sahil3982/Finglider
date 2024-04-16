/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function PhoneInputPage({ handleNext , setPhoneNumber ,phoneNumber}) {
  return (
    <div className="max-w-md mx-auto px-4 py-8 mt-16 flex flex-col items-center rounded-lg shadow-lg">
    <h1 className="text-3xl mb-4">Enter Phone Number</h1>
    <form className="flex flex-col p-6">
      <input
        type="text"
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="input-field mb-4 bg-gray-300 px-4 py-2 rounded-lg focus:outline-none"
      />
      <Link to='/verify-otp'>
        <button onClick={handleNext} className="btn-primary bg-blue-500 px-5 py-2 rounded-lg text-white hover:bg-blue-600 focus:outline-none">
          Submit
        </button>
      </Link>
    </form>
  </div>
  );
}

export default PhoneInputPage;
