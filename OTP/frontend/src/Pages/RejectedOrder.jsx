/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const RejectedOrder = ({ orderdata }) => {
    return (
      <div>
        <h2 className="text-xl m-2 font-bold mb-4">Rejected Order</h2>
  
        {orderdata.map(({ customerName, id, status, items, address, OrderID, date }) => (
          <div
            key={id}
            className="bg-white rounded-lg overflow-hidden shadow-lg p-5 mb-4 mx-4 flex items-center justify-between"
          >
            <div>
              <span className="text-2xl">{customerName}</span>
              <span>{items} </span><br></br> 
              <span>ORDERID : {OrderID}</span><br></br>
              <span>  DATE : {date} </span><br></br>
              <span>Address: {address}</span><br></br>
              <span className="font-bold">Status : {status} </span>
            </div>
            <Link to={`/viewdetails/${id}`}>
                  <button className="bg-gray-500 p-2 m-2 px-5 rounded-lg overflow-hidden shadow-lg">
                    View Details
                  </button>
                </Link>
           
          </div>
        ))}
      </div>
    );
  };
  
  export default RejectedOrder;
  