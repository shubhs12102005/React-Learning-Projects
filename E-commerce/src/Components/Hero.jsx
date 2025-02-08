import React from 'react'

function Hero() {
  return (
    <div className='container p-8 max-w-[1200px] mx-auto'>
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
            <div className='relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1] hover:scale-105 duration-500'>
                  <img className='w-full h-[90%] object-cover rounded-lg ' src="/hero__1.webp" alt="Hero Image" />
            
                  <div className='absolute max-w-[500px] sm:ml-12 ml-2 top-[7%] sm:top-[20%]'>
                        <p className='font-bold ml-6 sm:ml-8'>100% Original Dry Fruites</p>
                        <h1 className='font-bold ml-2 sm:ml-0 text-xl sm:text-2xl'>Dried Fruit Best Quality</h1>
                        <p className='text-gray-600 font-bold ml-20 mt-1'>Starting At</p>
                        <p className='ml-24 mt-1 text-3xl text-red-600 font-bold'>$18</p>
                        <button className='py-1 px-3 border bg-green-500 text-white rounded-lg mt-1 ml-16'>Shop Now</button>
                  </div>
           </div>

            <div className='relative hover:scale-105 duration-500'>
                 <img className='w-full h-[80%] object-cover rounded-lg ' src="/hero__2.webp" alt="Hero Image" />
            
                  <div className='absolute max-w-[500px] sm:ml-6 ml-6 top-[15%]'>
                        <h1 className='font-bold text-xl'>Dried Fruit Best Quality</h1>
                        <p className='text-gray-600 font-bold ml-20 mt-2'>Starting At</p>
                        <p className='ml-24 mt-2 text-2xl text-red-600 font-bold'>$18</p>
                        <button className='py-1 px-3 border bg-green-500 text-white rounded-lg mt-3 ml-16'>Shop Now</button>
                 </div>
            </div>

            <div className='relative hover:scale-105 duration-500'>
                 <img className='w-full h-[80%] object-cover rounded-lg ' src="/hero__3.webp" alt="Hero Image" />
            
                  <div className='absolute max-w-[500px] sm:ml-6 ml-6 top-[15%]'>
                        <h1 className='font-bold text-xl'>Dried Fruit Best Quality</h1>
                        <p className='text-gray-600 font-bold ml-20 mt-2'>Starting At</p>
                        <p className='ml-24 mt-2 text-2xl text-red-600 font-bold'>$18</p>
                        <button className='py-1 px-3 border bg-green-500 text-white rounded-lg mt-3 ml-16'>Shop Now</button>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Hero