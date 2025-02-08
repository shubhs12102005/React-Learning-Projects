import React from 'react'
import { ReactTyped } from "react-typed";


function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
      <div className='max-w-[1240px] py-[40px] mx-auto text-center font-bold'>
        <div className='text-[30px]'>Learn with us</div>

        <h2 className='text-[60px] text-white'>Grow with us</h2>

        <div className='text-[40px] text-white'>
          Learn
          <ReactTyped
          className='ml-2'
            strings={[
              "Web development",
              "Digital marketing",
              "Ethical hacking",
            ]}
            typeSpeed={70}
            backSpeed={60}
            loop={true}
          />
        </div>
        <button className='mt-4 p-3 rounded-md text-white bg-black'>Get Started</button>

      </div>
    </div>
  )
}

export default Banner