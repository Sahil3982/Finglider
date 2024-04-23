import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import RecomendedItem from "./RecomendedItem";
function RecomItems({handleClick,recommendedItemLists,cart}) {
const [slideToShow,SetSlideToShow]= useState(3);

useEffect(()=>{
  const handleSize = ()=>{
        SetSlideToShow(Math.ceil((window.innerWidth)/440))
  }
  window.addEventListener('resize',handleSize);
  handleSize();
  return()=>{
    window.removeEventListener('resize',handleSize);
  }
},[])
 
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slideToShow,
    slidesToScroll: slideToShow,
    autoplay: true,      
    autoplaySpeed: 5000   
  };
 
  return (
    <div className="slider-container"   >
      <Slider {...settings}>
      {
        recommendedItemLists.map((item,index) => (
              <RecomendedItem 
              key ={index}
              recommendedItem={item}
              handleClick={handleClick}
              cart={cart}
               />))}
      </Slider>
    </div>
  );
}

export default RecomItems;
