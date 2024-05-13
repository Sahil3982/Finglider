import React,{useState} from 'react';
import { IoMdCart } from "react-icons/io";
import { useCart } from '../CartContext';
import LanguageHandler from "./LanguageHandler";
import { FaUserCircle } from "react-icons/fa";
import PhoneInput from './PhoneInput';
import PhoneVerification from './PhoneVerification';
import axios from 'axios';

function CartSection({size, form,setForm,phoneNumber,setPhoneNumber, pageVisible,setPageVisible,
   setCartVisible,isphoneNumber}) {
        
    const {totalPrice}= useCart();
    console.log(totalPrice);
   
 
    const [isVerified, setIsVerified] = useState(false); 
    const [color, setColor] = useState(false); 
    
 
    const handleNext = ()=>{
    
        axios.post('http://localhost:3008/api/otp/getphoneno',  { phoneNumber: phoneNumber || form.phoneNumber })
        .then(response => {
       
          if (response.data.success) {
            console.log("OTP Generated successful");
            
          } else {
            console.log("OTP Generated failed");
           
          }
        })
        .catch(error => {
          
          console.error('Error sending data to server:', error);
         
        });
    
        
        setIsVerified(true);
        setPageVisible(false);
      }


  return (
    <header className="section-header "style={{zIndex:1500}} >
        <section className="header-main shadow-sm bg-white" >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-1 ">
                        <a href="#"  className="brand-wrap mb-0">
                            <img alt="#" className="img-fluid" src="img/logo_web.png"/>
                        </a>
 
                    </div>
                    <div className="col-3 d-flex align-items-center m-none" style={{position:'relative',bottom:'10px'}}>

                    </div>
                    <div className="col-6">
                        <div className="d-flex align-items-center justify-content-end  ">
                        <span className=' widget-header mr-4 t'> <FaUserCircle onClick={()=>setPageVisible(true)} style={{fontSize:'30px', color: color?"DarkCyan":"darkred"}} /> </span> 
                            <a href="#"  className="" data-target="#cartBox"
                                data-toggle="modal">
                               <div></div>
                                <div className="icon d-flex align-items-center pt-2 ">
                                
                                                   
                                <IoMdCart style={{ color: 'Salmon', fontSize: '30px' }} onClick={()=>setCartVisible(true)}/>
                                <div className="mr-2 mb-0  border rounded-pill bg-danger px-1 py-0 text-white shadow"
                                style={{position:'relative',bottom:'10px'}}>{size}</div>

                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="me-auto mt-0" style={{ color: 'orange', fontSize: '15px' }}>Total: ₹{totalPrice}</div>
                                </div>

                            </a>



                        </div>
                    
                    </div>
                    <div className="col-1">
                     <span>Language</span> &nbsp;
                     <LanguageHandler /> 
                    </div>
                </div>
                
                {pageVisible && <PhoneInput  phoneNumber={phoneNumber} form={form}
                 pageVisible={pageVisible} setPhoneNumber={setPhoneNumber} handleNext={handleNext} setPageVisible={setPageVisible}/>}
                {isVerified && <PhoneVerification phoneNumber={phoneNumber}  form={form} setIsVerified={setIsVerified} setColor={setColor} />}
            </div>
        </section>
    </header>
  )
}

export default CartSection