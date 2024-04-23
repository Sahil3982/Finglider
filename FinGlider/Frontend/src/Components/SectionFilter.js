import React from 'react'
import {MenuList} from './menu'
import SectionItem from './SectionItem';
import Slider from 'react-slick';
function SectionFilter() {

const sectionMenu=MenuList;
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,//automatically set
    slidesToScroll: 4
  };
  return (
    <div class="container">
    <div class="cat-slider">
    <Slider {...settings}>
    {
            sectionMenu.map((Item,index) => (
            <SectionItem SectionItem={Item} />
            ))}
            </Slider>
    </div>
</div>
  )
}

export default SectionFilter