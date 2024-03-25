import React from 'react'
import Cart from './Cart'
import bag from '../assets/bag.jpg'
import phone from '../assets/phone.jpg'
import shoes from '../assets/shoes.jpg'
import watch from '../assets/watch.jpg'
import pen from '../assets/pen.jpg'
import laptop from '../assets/laptop.jpg'

const ShoppingCart = () => {
    return (
        <>

            <div className='flex flex-wrap max-w-screen-lg mx-auto '>
                <Cart url={bag} name=" Collage Bags" />
                <Cart url={phone} name=" Smart Phone" />
                <Cart url={shoes} name=" Shoes" />
                <Cart url={watch} name=" Watch" />
                <Cart url={pen} name=" Pen" />
                <Cart url={laptop} name=" Laptop" />
            </div>
        </>
    )
}

export default ShoppingCart