import React,{useEffect, useState} from 'react';
import { GiShoppingCart } from "react-icons/gi";
import CartBox from './CartBox'; 
import axios from 'axios';

function Footer({size, setCartVisible}) {
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
    <footer className="section-footer border-top bg-dark d-md-block  d-block">
      <div className="container  ">
       
       <div class="osahan-menu-fotter fixed-bottom bg-primary px-3 py-1 text-center d-none ">
        <div className="row py-2 bg-white text-center ">
          <div className="col">
            <a id="linkHomeSection" className="text-dark small font-weight-bold text-decoration-none">
              <p className="h4 m-0"><i className="feather-home"></i></p>
              Home
            </a>
          </div>

        <div className="col bg-white rounded-circle mt-n4  px-3 py-2 text-center ">
        <span className='circle'>{size}</span>

  <div className=" rounded-circle mt-n0 py-2 px-0 shadow" onClick={()=>setCartVisible(true)}  style={{backgroundColor:'CadetBlue'}}>
 
    <a id="linkcartSection1" href="#" data-target="#cartBox" data-toggle="modal" className="text-dark small font-weight-bold text-decoration-none rounded-circle"> {/* Use text-dark for black text */}
     
      <p className="h4 m-0"><i className="feather-shopping-cart text-white"  ></i></p>
      Cart
    </a>
  </div>
</div>

          <div className="col">
            <a href="tel:+91 9980781111" className="text-dark small font-weight-bold text-decoration-none ">
              <p className="h4 m-0"><i className="feather-phone"></i></p>
              Phone
            </a>
          </div>
        </div>
      </div>
      </div>

     
      <section className="container d-none d-md-block">
        <section className="footer-top padding-y py-5">
          <div className="row pt-3">
            <aside className="col-md-4 footer-about">
              <article className="d-flex pb-3">
                <div>
                  <img alt="#" src="img/logo_web.png" className="logo-footer mr-3" />
                </div>
                <div>
                  <h6 className="title text-white">About Us</h6>
                  <p className="text-muted">{RestaurantInfo.Name} </p>
                   <p className="text-muted"> Address: {RestaurantInfo.Address} </p>
                    
                 
                  <div className="d-flex align-items-center"></div>
                </div>
              </article>
            </aside>
          </div>
        </section>
      </section>

      <section className="footer-copyright border-top py-3 bg-light">
        <div className="container d-flex align-items-center">
          <p className="mb-0"> © 2023 Company All rights reserved </p>
          <p className="text-muted mb-0 ml-auto d-flex align-items-center"></p>
        </div>
      </section>
    </footer>
   
  );
}

export default Footer;
