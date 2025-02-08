import React from 'react'

function Plans() {
  return (
    <div className='p-[100px]'>
           <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6 '>
                  <div className='shadow-2xl rounded h-[450px] hover:scale-105 duration-500'>
                        <img className='mt-4 max-w-[20%] ml-40' src="./single.png" alt="" />
                        <h1 className='font-bold text-center text-2xl mt-4'>Web Development</h1>
                        <h1 className='font-bold text-center text-3xl mt-6'>$ 149</h1>

                        <div className='max-w-[250px] mx-auto text-center'>
                           <p className='text-center mt-8 border-b border-gray-200'>Lorem ipsum dolor sit amet </p>
                        </div>

                        <div className='max-w-[300px] mx-auto text-center'>
                           <p className='text-center mt-8 border-b border-gray-200'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <button className='mt-12 ml-28 bg-green-400 text-white p-3 px-8 mx-auto rounded'>Start Trial</button>
                  </div>
                  
                  <div className='shadow-2xl rounded h-[450px] bg-gray-200 hover:scale-105 duration-500 mt-16'>
                        <img className='mt-4 max-w-[20%] ml-40' src="./double.png" alt="" />
                        <h1 className='font-bold text-center text-2xl mt-4'>Digital Marketing</h1>
                        <h1 className='font-bold text-center text-3xl mt-6'>$ 149</h1>

                        <div className='max-w-[250px] mx-auto text-center'>
                           <p className='text-center mt-8 border-b border-gray-200'>Lorem ipsum dolor sit amet </p>
                        </div>

                        <div className='max-w-[300px] mx-auto text-center'>
                           <p className='text-center mt-8 border-b border-gray-200'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <button className='mt-12 ml-28 bg-black text-green-500 p-3 px-8 mx-auto rounded'>Start Trial</button>
                  </div>

                 <div className='shadow-2xl rounded h-[450px] hover:scale-105 duration-500 mt-16'>
                  <img className='mt-4 max-w-[20%] ml-40' src="./triple.png" alt="" />
                  <h1 className='font-bold text-center text-2xl mt-4'>App Development</h1>
                  <h1 className='font-bold text-center text-3xl mt-6'>$ 149</h1>

                  <div className='max-w-[250px] mx-auto text-center'>
                     <p className='text-center mt-8 border-b border-gray-200'>Lorem ipsum dolor sit amet </p>
                  </div>

                  <div className='max-w-[300px] mx-auto text-center'>
                     <p className='text-center mt-8 border-b border-gray-200'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                  <button className='mt-12 ml-28 bg-green-400 text-white p-3 px-8 mx-auto rounded'>Start Trial</button>
                  </div>
           </div>
    </div>
  )
}

export default Plans