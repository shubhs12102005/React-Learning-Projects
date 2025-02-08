import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { IoLogoOctocat } from "react-icons/io";

function Navber() {
    return (
        <div className='w-full p-4'>
            <div className='flex justify-between items-center'>
                <div>
                  <IoLogoOctocat className='text-[45px] text-gray-800 cursor-pointer'/>
                </div>

                <div className='relative w-full max-w-[400px]'>
                    <input className='ml-4 sm:ml-0 w-[250px] sm:w-full px-2 py-2 outline-none rounded-[30px] bg-[#f2f3f5] ' type="text" placeholder='Search Product...' />
                    <CiSearch className='absolute inline right-4 top-2 text-2xl cursor-pointer'/>
                </div>

                <div className='hidden sm:flex gap-4 cursor-pointer'>
                    <div className='w-[35px] h-[35px] rounded-full border border-gray-400 flex justify-center items-center'>
                      <MdPerson  className='text-2xl text-gray-600'/>
                    </div>

                    <div className='w-[35px] h-[35px] rounded-full border border-gray-400 flex justify-center items-center'>
                      <IoCartOutline   className='text-2xl text-gray-600'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navber