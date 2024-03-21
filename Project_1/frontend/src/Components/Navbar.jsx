import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="flex justify-around p-2 bg-blue-200">
                <Link to="/dashboard" className='bg-gray-600 p-2 text-white'>DashBoard</Link>
                <div className="flex gap-10">
                    <Link to="/" className='bg-gray-600 p-2 text-white'>Home</Link>
                    <Link to="/about" className='bg-gray-600 p-2 text-white'>About</Link>
                    <Link to="/contact" className='bg-gray-600 p-2 text-white'>Contact</Link>
                    <Link to="/summary" className='bg-gray-600 p-2 text-white'>Summary</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar