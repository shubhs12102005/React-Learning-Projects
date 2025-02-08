
function Category() {
  return (
    <div className='w-full p-5 '>
       <div className='max-w-[1200px] mx-auto grid sm:grid-cols-3 md:grid-cols-3 grid-rows-2 gap-4'>

           <div className="grid col-span-1">
                <div className="sm:w-full md:flex items-center justify-between sm:flex-col sm:text-center border border-gray-300 rounded-2xl p-4 hover:scale-105 duration-500">
                      <div className="p-4">
                          <h3 className="text-2xl font-semibold">Fresh Fruits</h3>
                          <p className="text-gray-500 font-semibold">9 Products</p>
                      </div>

                      <div className="w-[100px] sm:w-[150px] sm:mt-4">
                         <img className="w-full" src="/category__1.webp" alt="Fresh Fruits" />
                      </div>
                </div>
           </div>

            <div className='grid col-span-1 '>
              <div className='sm:w-full md:flex items-center justify-between sm:flex-col sm:text-center border border-gray-300 rounded-2xl p-4 hover:scale-105 duration-500'>

                    <div className="p-4">
                        <h3 className="text-2xl mr-2 font-semibold">Fresh Vegs</h3>
                        <p className="text-gray-500 ml-2 font-semibold">10 Products</p>
                  </div>

                    <div className='w-[100px] sm:w-[150px]'>
                        <img className='w-full' src="/category__2.webp" alt="" />
                    </div>
                </div>
          </div>

          <div className='grid col-span-1 '>
              <div className='sm:w-full md:flex items-center justify-between sm:flex-col sm:text-center border border-gray-300 rounded-2xl p-4 hover:scale-105 duration-500'>

                    <div className="p-4">
                        <h3 className="text-2xl mr-2 font-semibold">Canned Goods</h3>
                        <p className="text-gray-500 ml-2 font-semibold">12 Products</p>
                  </div>

                    <div className='w-[100px] sm:w-[150px]'>
                        <img className='w-full' src="/category__3.webp" alt="" />
                    </div>
                </div>
          </div>

          <div className='grid col-span-1 '>
              <div className='sm:w-full md:flex items-center justify-between sm:flex-col sm:text-center border border-gray-300 rounded-2xl p-4 hover:scale-105 duration-500'>

                    <div className="p-4">
                        <h3 className="text-2xl  font-semibold">Bread & Bakery</h3>
                        <p className="text-gray-500 ml-2 font-semibold">15 Products</p>
                  </div>

                    <div className='w-[100px] sm:w-[150px]'>
                        <img className='w-full' src="/category__4.webp" alt="" />
                    </div>
                </div>
          </div>

          <div className='grid col-span-1 '>
              <div className='sm:w-full md:flex items-center justify-between sm:flex-col sm:text-center border border-gray-300 rounded-2xl p-4 hover:scale-105 duration-500'>

                    <div className="p-4">
                        <h3 className="text-2xl mr-2 font-semibold">Fishes</h3>
                        <p className="text-gray-500 mr-2 font-semibold">9 Products</p>
                  </div>

                    <div className='w-[100px] sm:w-[150px]'>
                        <img className='w-full' src="/category__5.webp" alt="" />
                    </div>
                </div>
          </div>

          <div className='grid col-span-1 '>
              <div className='sm:w-full md:flex items-center justify-between sm:flex-col sm:text-center border border-gray-300 rounded-2xl p-4 hover:scale-105 duration-500'>

                    <div className="p-4">
                        <h3 className="text-2xl mr-2 font-semibold">Fresh Eggs</h3>
                        <p className="text-gray-500 ml-2 font-semibold">9 Products</p>
                  </div>

                    <div className='w-[100px] sm:w-[150px]'>
                        <img className='w-full' src="/category__6.webp" alt="" />
                    </div>
                </div>
          </div>

      </div>
    </div>
  )
}


export default Category;