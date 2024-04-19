const RejectedOrder = ({ orderdata }) => {
    return (
      <div>
        <h2 className="text-xl m-2 font-bold mb-4">Rejected Order</h2>
  
        {orderdata.map(({ customerName, id, status, items, address, OrderID, date, TotalAmount }) => (
          <div
            key={id}
            className="bg-white rounded-lg overflow-hidden shadow-lg p-5 mb-4 mx-4 flex items-center justify-between"
          >
            <div>
              {/* <span className="text-2xl">{customerName}</span> */}
              {/* <span>{items} </span><br></br> */}
              <span>ORDERID : {OrderID}</span><br></br>
              <span>  DATE : {date} </span><br></br>
              <span>Address: {address}</span><br></br>
              <span className="font-bold">Status : {status} </span>
            </div>
            <div>
              <button className="bg-blue-500 p-2 m-2 rounded-lg overflow-hidden shadow-lg">Rejected</button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default RejectedOrder;
  