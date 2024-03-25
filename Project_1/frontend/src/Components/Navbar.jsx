import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-400 to-purple-600 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4 py-2">
                <Link to="/dashboard" className='text-lg font-semibold text-white hover:text-gray-200 transition duration-300'>Dashboard</Link>
                <div className="flex gap-4">
                    <Link to="/" className='text-lg font-semibold text-white hover:text-gray-200 transition duration-300'>Home</Link>
                    <Link to="/about" className='text-lg font-semibold text-white hover:text-gray-200 transition duration-300'>About</Link>
                    <Link to="/contact" className='text-lg font-semibold text-white hover:text-gray-200 transition duration-300'>Contact</Link>
                    <Link to="/summary" className='text-lg font-semibold text-white hover:text-gray-200 transition duration-300'>Summary</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
