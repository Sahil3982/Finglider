import React from "react";
import { Link } from "react-router-dom";

const ProfileHeader = ({ username, onLogout }) => {
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
      <Link to="/logout">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={onLogout}>
          Logout
        </button>
      </Link>
    </div>
  );
};

export default ProfileHeader;
