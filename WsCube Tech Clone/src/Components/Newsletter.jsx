import React from 'react'

function Newsletter() {
  return (
     <div className='w-full bg-[#2699fb] p-10 md:p-20 flex justify-between'>
        <div className='text-white md:ml-16'>
            <h1 className='text-lg md:text-2xl font-bold'>Want tp learn latest IT Skills?</h1>
            <p className='text-[10px] md:text-[13px] ml-6'>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className='md:mr-16'>
          <input className='w-[150px] md:w-[200px] p-2 rounded outline-none border border-orange-400' type="text" placeholder='Enter email'/>
          <button className='ml-2 bg-black text-white p-1 md:p-2 rounded px-2 md:px-4'>Notify me</button>
        </div>
    </div>
  )
}

export default Newsletter