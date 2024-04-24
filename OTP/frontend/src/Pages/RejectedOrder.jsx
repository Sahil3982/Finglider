/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RejectedOrder = ({ orderdata }) => {
  return (
    <div>
      <div className="flex justify-center justify-between">
        <h2 className="text-xl m-2 font-bold mb-4">Rejected Orders</h2>
        <Link to="/neworder" className="text-xl m-2 font-bold mb-4">
        <FontAwesomeIcon icon={faBackward} size="lg" style={{color: "#000000",}} />

        </Link>
        <SearchBar />
      </div>

      {orderdata.map(
        ({ customerName, id, status, items, address, OrderID, date }) => (
          <div
            key={id}
            className="bg-white rounded-lg overflow-hidden shadow-lg p-5 mb-4 mx-4 flex items-center justify-between"
          >
            <div>
              <i className="fa-solid fa-user"></i>
              <span className="text-2xl">{customerName}</span>
              <span>{items} </span>
              <br></br>
              <span>ORDERID : {OrderID}</span>
              <br></br>
              <span> DATE : {date} </span>
              <br></br>
              <span>Address: {address}</span>
              <br></br>
              <span className="font-bold">Status : {status} </span>
            </div>
            <Link to={`/viewdetails/${id}`}>
              <button className="bg-gray-500 p-2 m-2 px-5 rounded-lg overflow-hidden shadow-lg">
                View Details
              </button>
            </Link>
          </div>
        )
      )}
    </div>
  );
};

export default RejectedOrder;
