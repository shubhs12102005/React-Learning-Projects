import React, { useState } from 'react'
import { IoMdMenu, IoMdClose  } from "react-icons/io";

function Navbar() {
    // UseState Used to toggle the Header Menues
    const [toggle, setToggle] = useState(false);

  return (
    <div className='bg-[#2699fb] p-4'>
          <div className='max-w-[1240px] py-[10px] flex items-center justify-between mx-auto'> 
             <div className='text-3xl font-bold'>
                WsCube Tech
             </div>


             {/*This method used to toggle the header menues to open and close*/}
             {
                toggle?
                <IoMdClose onClick={() =>setToggle(!toggle)} className='text-white text-3xl  md:hidden block'/>
                :
                <IoMdMenu onClick={() =>setToggle(!toggle)} className='text-white text-3xl  md:hidden block'/>
             }


            <ul className='hidden md:flex gap-7 text-[#fff] cursor-pointer text-lg'>
                <li>Home</li>
                <li>Company</li>
                <li>Resources</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            {/* Responsive for small devices */}
            <ul className={`duration-500 md:hidden text-[#fff] bg-black font-bold cursor-pointer text-lg fixed  top-[88px]  h-full w-1/2 
                 ${toggle ? 'left-[0]' : 'left-[-100%]'}
                 `}>
                <li className='p-5'>Home</li>
                <li className='p-5'>Company</li>
                <li className='p-5'>Resources</li>
                <li className='p-5'>About</li>
                <li className='p-5'>Contact</li>
            </ul>
          </div>
          <div className='mt-4 border-b border-white'></div>

    </div>
  )
}

export default Navbar