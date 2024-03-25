import React from 'react'

const Cart = ({ url, name, discription }) => {
    return (
        <>
            <div className='w-max m-2'>
                <div className='w-72'><img src={url} /></div>
                <div className='flex items-center justify-center justify-between m-2'>
                    <div className='text-3xl font-bold'>{name}</div>
                    <div className='bg-blue-400 p-2 rounded-lg border border-solid border-2 '><button type='value'>ADD </button></div>
                </div>
            </div>
        </>
    )
}

export default Cart