import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { FaUserCircle } from "react-icons/fa";


function RestInfo({setPageVisible}) {
 
    const [RestaurantInfo ,setRestaurentInfo] = useState({});

  useEffect(()=>{
    axios.get('http://localhost:3008/api/restaurent')
    .then((response)=>{
      setRestaurentInfo(response.data.restaurants[0]);
      console.log(response.data.restaurants[0])
    })
    .catch((error)=>{
      console.log(error);
    })
  },[]);
  return (
    <>
     <div className="d-none ">
        <div id="homeSection" className="p-3 d-flex justify-content-between" style={{backgroundColor:'CadetBlue'}}>
            <h4 className="font-weight-bold m-0 text-white">{RestaurantInfo.ApplicationHeader}</h4>
            <div className= "px-3" >   < a href="#" onClick={() => setPageVisible(true)}>
      <FaUserCircle style={{ fontSize: '30px', color: "darkred" }} />
              </a>    </div>
        </div>
        
    </div>
    <div className="offer-section py-4">
        <div className="container position-relative">
            <div className="pt-3 text-white">
                <h2 className="font-weight-bold">{RestaurantInfo.Name}</h2>
                <p className="text-white m-0">{RestaurantInfo.Address}</p>
                <div className="rating-wrap d-flex align-items-center mt-2">
                  
                </div>
            </div>
            <div className="pb-5">
                <div className="row">
                  
                    <div className="col-6 col-md-2">
                        <p className="text-white-50 font-weight-bold m-0 small">Open time</p>
                        <p className="text-white m-0">{RestaurantInfo.OpenTime}</p>
                    </div>
                    <div className="col-6 col-md-2">
                        <p className="text-white-50 font-weight-bold m-0 small">Close time</p>
                        <p className="text-white m-0">{RestaurantInfo.CloseTime}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default RestInfo