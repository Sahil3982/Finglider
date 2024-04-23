import React,{useEffect, useState} from 'react'
import { BiSolidCartAdd } from "react-icons/bi";
import MenuItem from './MenuItem';
import { useCart } from '../CartContext';
import MenuSection from './MenuSection';
import CartBox from './CartBox';

function RecomendedItem(props) {
    const recommendedItem = props.recommendedItem;
    const cart = props.cart;
   const { totalPrice, itemQuantities,setItemQuantities, updateQuantity, newQuantity,updateTotalPrice,setTotalPrice, resetTotalPrice } = useCart();
   const[button,SetButton]= useState(false);
   const quantity = itemQuantities[recommendedItem.MenuId] || 0;
   
   
   const handleClick = () => {
        props.handleClick(recommendedItem);
        const newQuantity = quantity + 1;
        updateQuantity(recommendedItem.MenuId,newQuantity)
        {recommendedItem.OfferDescription? updateTotalPrice(recommendedItem.Price*(1- recommendedItem.OfferHihglight)) : updateTotalPrice(recommendedItem.Price)}
      
    };
    
    useEffect(() => {
        const isInCart = cart.some(item => item.MenuId === recommendedItem.MenuId);
        SetButton(isInCart);
    }, [cart]);
   
    
  return (
   
                <div className="osahan-slider-item"  >
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                     <div className="list-card-image">
                         <a href='# '>
                             <img alt="#" src={recommendedItem.RecommendedImageUrl} className="img-fluid item-img w-100 h-100 " style={{height:"300px", width:"100px"}}/>
                         </a>
                     </div>
                        <div className="p-3 position-relative">
                            <div className="list-card-body">
                                <h6 className="mb-1"><a href="#" className="text-black">{recommendedItem.Item}</a>
                                </h6><a href='#' role='button'>
                                <button type="button" onClick={handleClick}  className=' bg-white border-white btn btn-outline-secondary' style={{ float: 'right', fontSize: '30px',color: button? 'gray':'orange', top: '50', border:'none'}
                                  }disabled={button}

                                >
                                <BiSolidCartAdd/>
                                </button></a>
                                {recommendedItem.OfferDescription&&(<div style={{textDecoration:'line-through',color:'red' }} className='d-flex allign item-center pl-0 pb-1 pt-0 '>
                          ₹{recommendedItem.Price}
                          </div>
                         )}
                                <p className="text-gray mb-3 d-flex allign item-center pt-0 h6 font-weight-bolder">₹{recommendedItem.OfferDescription?(recommendedItem.Price*(1- recommendedItem.OfferHihglight)):recommendedItem.Price}</p>
                                <p className="text-gray m-0"> <span className="text-black-50">
                                        {recommendedItem.Description2}   </span></p>
                            </div>
                        </div>
                    </div>
                    
                </div>
              
         
  )
}

export default RecomendedItem