import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='h-12 w-full flex justify-between items-center p-8 border-b-2 border-gray-400'>
                <Link to="/" className='ml-4'><img src="/logo.webp" alt="" /></Link>
                
                <div className="flex items-center gap-2 sm:gap-6 mr-4">
                    <Link to="/about" className="text-gray-700 hover:text-blue-600 transition font-medium">About Us</Link>
                    <Link to="/form" className="bg-blue-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-blue-700 transition font-medium">Volunteer Form</Link>
                </div>

            </div>
        </>
    )
}

export default Header