import { FaBasketShopping } from "react-icons/fa6";
function FeatureSectionFruites() {
  return (
    <div className='w-full p-6'>
        <div className='w-[1200px] mx-auto'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-2xl font-bold'>Fruites & Vagetables</h1>
                    <p className='text-gray-600 font-semibold'>Buy farm best Fruites & Vegetables online at the best prices</p>
                </div>
                <div>
                    <ul className='flex gap-4 text-gray-600 font-semibold'> 
                        <li className='py-1 px-2 bg-green-600 rounded-2xl text-white'>Fruites</li>
                        <li>Vegetables</li>
                        <li>Bread & Bekery</li>
                    </ul>
                </div>
            </div>

            <div className=' grid-cols-2 grid md:grid-cols-5 mt-8'>
                <div>
                    <img className='' src="/feature__1.webp" alt="" />
                </div>

                <div className="max-w-[250px] ml-4 border p-4 shadow-2xl rounded-lg hover:scale-105 duration-500">
                    <div className='w-[200px] '>
                        <img className='' src="/product__1.webp" alt="" />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="ml-2">
                            <h1 className="font-semibold text-2xl text-red-600">Kiwi</h1>
                            <h1 className="font-bold text-3xl text-red-700">$20</h1>
                        </div>
                        <div className="mr-2 w-[40px] h-[40px] rounded-full bg-green-700 flex justify-center items-center">
                            <FaBasketShopping className="text-white text-2xl"/>
                            
                        </div>
                    </div>
                </div>

                <div className="max-w-[250px] ml-4 border p-4 shadow-2xl rounded-lg hover:scale-105 duration-500">
                    <div className='w-[200px] '>
                        <img className='' src="/product__2.webp" alt="" />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="">
                            <h1 className="font-semibold text-xl text-red-600">Dried Mango</h1>
                            <h1 className="font-bold text-3xl text-red-700">$30</h1>
                        </div>
                        <div className="mr-2 w-[40px] h-[40px] rounded-full bg-green-700 flex justify-center items-center">
                            <FaBasketShopping className="text-white text-2xl"/>   
                        </div>
                    </div>
                </div>

                <div className="max-w-[250px] ml-4 border p-4 shadow-2xl rounded-lg hover:scale-105 duration-500">
                    <div className='w-[200px] '>
                        <img className='' src="/product__3.webp" alt="" />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="">
                            <h1 className="font-semibold text-xl text-red-600">Breaky Muesli</h1>
                            <h1 className="font-bold text-3xl text-red-700">$20</h1>
                        </div>
                        <div className="mr-2 w-[40px] h-[40px] rounded-full bg-green-700 flex justify-center items-center">
                            <FaBasketShopping className="text-white text-2xl"/>
                            
                        </div>
                    </div>
                </div>

                <div className="max-w-[250px] ml-4 border p-4 shadow-2xl rounded-lg hover:scale-105 duration-500">
                    <div className='w-[200px] '>
                        <img className='' src="/product__4.webp" alt="" />
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="font-semibold text-lg text-red-600">Almond Organic</h1>
                            <h1 className="font-bold text-3xl text-red-700">$20</h1>
                        </div>
                        <div className="mr-2 w-[40px] h-[40px] rounded-full bg-green-700 flex justify-center items-center">
                            <FaBasketShopping className="text-white text-2xl"/>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default FeatureSectionFruites