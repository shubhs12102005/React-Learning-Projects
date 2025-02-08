import React from 'react'
import {FaYoutube, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-[#2699fb] w-full py-[40px] grid grid-cols-4'>
            <div className='ml-5 md:ml-32'>
                <h1 className='text-2xl font-bold '>WsCube Tech.</h1>
                <p className='my-4 text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus earum, commodi mollitia quia debitis error eveniet</p>
                <div className='flex gap-4 md:gap-8 mt-4 text-2xl cursor-pointer'>
                  <FaYoutube />
                  <FaFacebook />
                  <FaTwitter />
                  <FaGithub />
                </div>
            </div>

            <div className='ml-10 md:ml-40'>
                <ul>
                    <li className='font-bold text-lg mb-3'>Solution</li>
                    <li className='text-white my-2'>Analysis</li>
                    <li className='text-white my-2'>Marketing</li>
                    <li className='text-white my-2'>Commerce</li>
                    <li className='text-white my-2'>Insights</li>
                </ul>
            </div>

            <div className='ml-10 md:ml-36'>
                <ul>
                    <li className='font-bold text-lg mb-3'>Support</li>
                    <li className='text-white my-2'>Pricing</li>
                    <li className='text-white my-2'>Documentation</li>
                    <li className='text-white my-2'>Guides</li>
                    <li className='text-white my-2'>API Status</li>
                </ul>
            </div>

            <div className='ml-10 md:ml-32'>
                <ul>
                    <li className='font-bold text-lg mb-3'>Company</li>
                    <li className='text-white my-2'>About</li>
                    <li className='text-white my-2'>Jobs</li>
                    <li className='text-white my-2'>Blog</li>
                    <li className='text-white my-2'>Carrers</li>
                </ul>
            </div>
            
    </div>
  )
}

export default Footer