/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';
import { useCart } from '../CartContext';
import { FaAngleDoubleDown } from "react-icons/fa";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import {RestaurantInfo} from './menu';
import Orders from './Orders';
import { IoArrowBackCircle } from "react-icons/io5";  
import useTranslation from "./customHooks/translations";
import { IoClose } from "react-icons/io5";



const CartBox = ({ cart, setCart,form,setForm, cartVisible,setCartVisible,  size,phoneNumber,setPageVisible,pageVisible }) => {
  const { totalPrice, itemQuantities, updateQuantity, updateTotalPrice,setTotalPrice, resetTotalPrice } = useCart();
  const[showForm,setShowForm] = useState(false);
  const[show,setShow] = useState(true);
  const [text, setText] = useState("");
  const[showOtp,setShowOtp] = useState(false);
  const restaurent  = RestaurantInfo;
  const translation = useTranslation();
  console.log('cartv',cartVisible);
    const removeItem = (menuId) => {
    const removedItem = cart.find(item => item.MenuId === menuId);
    const updatedCart = cart.filter(item => item.MenuId !== menuId);
    setCart(updatedCart);
    { removedItem.OfferDescription? updateTotalPrice(-(removedItem.Price*(1- removedItem.OfferHihglight))): updateTotalPrice(-removedItem.Price)};
  };
  const handleShow = ()=>{
    setShowForm(true);
   
  }
  const handleShowCart = ()=>{
    setShow(false);
   
  }
  const handlehideCart = ()=>{
    setShow(true);
   
  }
  const handleCloseClick = () =>{
    console.log('button is clicked',cartVisible);
    setCartVisible(false);
    //window.location.reload();
   }  

  
  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setForm((prevData) => ({ ...prevData, [id]: value }));
  };
  const handleText = (e) => {
    setText(e.target.value);
  }
  const handleTextSubmit = () => {
    const { message } = text;
    setText("");
    enqueueSnackbar(`Thank you for your Suggestion !`, { variant: 'success' })
  }

  const handleFormSubmit = () => {
    const { name, phoneNumber, email, address } = form;

    if (!name || !phoneNumber || !email || !address) {
      setShowForm(true);
      setShow(false);

      enqueueSnackbar(`Please fill in all required fields.`, { variant: 'error' })
    } else {
      enqueueSnackbar(`Thank you ${name} for your Order !`, { variant: 'success' })
      setForm({
        name: '',
        phoneNumber: '',
        email: '',
        address: '',
      });
      setShowForm(false);
      handlePostClick();
      setCart([]);
      
      resetTotalPrice();
      setShow(true);
    }
  };

  const handleClose = ()=>{
    setCartVisible(false);
  }


  const handlePostClick = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/cart', {
        name: form.name,
        phoneNumber: form.phoneNumber,
        email: form.email,
        address: form.address,
        items: cart.map(item => ({
          name: item.Item,
          quantity: itemQuantities[item.MenuId] || 0,
          price: item.Price
        })),
        message: text,
        totalPrice: toPay
      });

      console.log('Order placed successfully:', response.data);
      setCart([]);
      if(setForm({
        name: '',
        phoneNumber: '',
        email: '',
        address: '',
      })){
        setShowForm(true);
      }else{
        setShowForm(false);
      }
      
      
    } catch (error) {
      console.error('Error placing order:', error);
      enqueueSnackbar('Failed to place order. Please try again later.', { variant: 'error' });
    }
  };
  const totalPriceNumber = parseFloat(totalPrice);
  let GST = (restaurent.Tax * totalPriceNumber).toFixed(2);
  let toPay = totalPriceNumber + parseFloat(GST);
 

  return (
    <SnackbarProvider>
    
      { cartVisible &&(<div
       className='col-md-6 col-lg-12 col-4 border border-4 border-black  mt-0 translate-middle mt-20 container position-absolute  border border-4' 
        //id="cartBox"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="cartBoxLabel"
        
      >
                  
        <div className="modal-dialog  mt-5  mx-auto shadow-lg border border-4 border-black"
         role="document" style={{zIndex:1200,top: '-35px' }} >
          <div className="modal-content shadow-lg border border-4 border-black">
            <div className="modal-header">
              <h5 className="modal-title" id="cartBoxLabel">
                <a href="#" className="brand-wrap mb-0">
                  <img alt="#" className="img-fluid" src="img/logo_web.png" />
                </a>
              </h5>
              <div className='px-2 pb-5' style={{ position: 'absolute', top: '5px', right: '10px',fontSize:"20px" }}> 
    <span><IoClose onClick={()=>{setPageVisible(false) ; setCartVisible(false)}}/></span>
  </div>
            </div>
            
            <div className="modal-body" >
              <div className='container'>
                <div className="row">

                  <div className="col-md-12 col-lg-12 col-12 order-md-last">

                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-primary">{translation.yourcart}</span>
                      <span className="badge bg-primary rounded-pill">{size}</span>
                    </h4>
                    
                    {size === 0 && (
                      <div>
                        <h6 className="text-danger mb-0 text-center">{translation.cartisempty}</h6>
                        <div className="bg-white p-3 py-3 border-bottom clearfix">
                          <div className="mb-0 input-group">
                            <div className="input-group-prepend" onClick={handleTextSubmit}>
                              <span className="input-group-text"><i className="feather-message-square"></i></span>
                            </div>
                            <textarea
                              id="txtUserSuggestions"
                              name='message'
                              placeholder="Any suggestions? We will pass it on..."
                              aria-label="With textarea"
                              className="form-control"
                              value={text}
                              onChange={handleText} >

                            </textarea>
                          </div>
                        </div>
                      </div>
                    )}

                    {size > 0 && (
                      
                      <ul className="list-group mb-3">
                        {cart.map((item, index) => (
                          
                          <li key={index} className="list-group-item d-flex justify-content-between lh-sm ">
                            <div className="col-5 col-md-6 col-lg-3">
                              <h6 className="my-0">{item.Item}</h6>
                              
                              <small className="text-body-secondary number font-weight-bold fs-5 ">{item.Heighlightdescription}</small>
                            </div>
                           
                            <div className="col-4 col-md-3 col-lg-4 d-flex align-items-end justify-content-center">
                              <div className="btn-group" role="group" aria-label="Basic example">
                              
                              <button
                                  type="button"
                                  className="btn-sm left inc btn btn-outline-secondary"
                                  onClick={() => {
                                    const newQuantity = Math.max(0, itemQuantities[item.MenuId] - 1);
                                    updateQuantity(item.MenuId, newQuantity);
                                    if(newQuantity === 0){
                                      removeItem(item.MenuId);
                
                                    } else{
                                      { item.OfferDescription? updateTotalPrice(-(item.Price*(1- item.OfferHihglight))): updateTotalPrice(-item.Price)};}
                                  }}
                                >
                                  <i className="feather-minus"></i>
                                </button>
                                <a
                                  href="#"
                                  className="btn-sm btn btn-outline-secondary division"
                                  data-toggle="modal"
                                  data-target="#extras"
                                  style={{ display: 'block' }}
                                >
                                  {itemQuantities[item.MenuId] || 0}
                                </a>
                                <button
                                  type="button"
                                  className="btn-sm left inc btn btn-outline-secondary "
                                  onClick={() => {
                                    const newQuantity = Math.max(0, itemQuantities[item.MenuId] + 1);
                                    updateQuantity(item.MenuId, newQuantity);
                                    { item.OfferDescription? updateTotalPrice((item.Price*(1- item.OfferHihglight))): updateTotalPrice(item.Price)};
                                  }}
                                >
                                  <i className="feather-plus"></i>
                                </button>
                            
                              </div>
                            </div>
                            <span className="text-body-secondary number font-weight-bold fs-5">₹{item.Price*(1-item.OfferHihglight)}</span>
                            
                          </li>
                        ))}
                      </ul>
                    )}
                    <hr />
                      <div className='d-flex justify-content-between mb-3 '>
                        {translation.ItemTotal}
                        <span> ₹{totalPrice} </span>
                      </div>
                      
                      {size !== 0 &&(<div className='d-flex justify-content-between mb-3 '>
                        GST
                        <span>₹{GST}</span>
                        
                      </div>)}
                      <hr />
                    <div>
                      <h6 className="font-weight-bold mb-0">{translation.TOPAY} <span className="float-right">₹{totalPrice + restaurent.Tax}</span></h6>
                      <hr />
                    </div>
                  </div>
                </div>

                <div >
    <div >
       
        
        {!showForm &&  <button onClick={handleShow} className="btn btn-primary rounded-pill px-3 mb-3" type="button" disabled={size === 0}>
        
        <h6> {translation.CustomerDetails} <span>  <FaAngleDoubleDown /> </span> </h6>
       
            </button>}
       
        {showForm &&  <div style={{overflowY:"auto", height:"150px"}}  >
            <div >
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" id="name" name="name" onChange={handleFormChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                        <input type="tel" 
                        className={`form-control ${!phoneNumber &&!showOtp&& `is-invalid`}`} id="phoneNumber" value={phoneNumber || form.phoneNumber} name="phoneNumber" onChange={handleFormChange}
                         required />
                         {!phoneNumber&& !showOtp&&(<div className='invalid-feedback mb-3'>
                         <p className='text-bold text-danger mb-0' style={{ fontSize: '12px' }}>Please Verify Your PhoneNumber!</p>
                         
                         <a href="#" data-target="#verify"
                         onClick={() => {
                             setPageVisible(true);
                             setShowOtp(true);
                          }}
                         
                         className="text-primary" style={{ fontSize: '12px', textDecoration: 'none' }}>
                           <button class="btn btn-primary rounded-pill px-3" type="button">Get Otp </button>
                            <span style={{ textDecoration: 'underline' }}></span> 
                          </a>
                          </div>)}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={handleFormChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address:</label>
                        <textarea className="form-control" id="address" name="address" rows="3" onChange={handleFormChange} required></textarea>
                    </div>
                </form>
            </div>
        </div>}
    </div>
</div>




                <div className="d-flex justify-content-center ">
                  <button onClick={() => { handleShowCart();}} type="button" className="btn btn-success btn-lg btn-block " disabled={size === 0 || (!form.name || !form.email || !form.address||(!phoneNumber && !form.phoneNumber)||!showOtp)}
                 data-bs-toggle="modal" data-bs-target="#modalSheet" id="#modalSheet">
                
                
                   {!showOtp ? "Please Verify Your Phone Number" : "Confirm Order"}
                </button>

                

                </div>

                
              </div>
             
            </div>
          </div>
        </div>
      </div>)}
     
      <div>
{!show && (
<div className='container'  >
<div className="modal  modal-sheet position-fixed d-block bg-body-secondary  row " tabindex="-1" role="dialog" id="modalSheet"
  style={{zIndex:'1200'} }>
  <div className="modal-dialog" role="document"  >
    <div className="modal-content rounded-4 shadow col-12 " style={{height:"660px", width:"540px",overflowY:"auto"}}>
      <div className="modal-header border-bottom-0 text-center">
      <a onClick={handlehideCart} style={{ color:"darkred",fontSize: '30px'}}> <IoArrowBackCircle />  </a>
        <h3 className ="modal-title fs-5 pt-4">Order Details</h3>
       <a href='# cartBox'  icontype="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
       />
      </div>
      <div class="modal-body py-0">
      <h6 className='pb-3 px-3'>Your Order</h6>
     
      
      <div className="table-responsive ">
  <table className='table table-bordered '>
    <thead>
      <tr className='text-center '>
        <th>Item</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody className='text-center '>
      {cart.map((item, index) => (
        <tr key={index}>
          <td>{item.Item}</td>
          <td>{itemQuantities[item.MenuId] || 0}</td>
          <td>₹{item.Price * (1 - item.OfferHihglight)}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div >


                      
<div className='p-3'>
        <h6>Contact Details</h6>
        <hr/>
       <div> {form.name}</div>
       <div> {phoneNumber || form.phoneNumber}</div>
       <div> {form.email}</div> 
       <div> {form.address}</div> 
       
</div>
      </div>


      <div class="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0 ">
        <button type="button"  onClick={handleFormSubmit} class="btn btn-lg btn-primary   ">Place Order</button>
       
      </div>
    </div>
  </div>
</div>
</div>
)}
</div>
     
      <Orders  show={show} form={form} cart={cart}/>
    </SnackbarProvider>
  );
};

export default CartBox;
