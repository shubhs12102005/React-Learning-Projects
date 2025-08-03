import React, { useState } from 'react'
import Ingrediants from './Ingrediants';

const Card = ({ item }) => {

  const [ingrediantCompo, setIngrediantCompo] = useState(false);

  const handleClick = () => {
    setIngrediantCompo(true);
  }

  return (
    <>
      <span className='w-[320px] h-[520px] border-2 rounded-[5px] hover:scale-105 transition-all duration-300 ease-in-out bg-white shadow-[0_5px_10px_rgba(78,73,73,0.5),_-5px_-5px_10px_rgba(34,34,34,0.5)]'>
        <img src={item.strMealThumb} alt="Image" />

        <div className='text-black text-center mt-4 text-[23px]'>
          <h1 className='font-bold'>{item.strMeal}</h1>
          <h1 className='text-gray-500'><span className='text-gray-500 font-bold'>{item.strArea}</span> Dish</h1>
          <h1 className='text-gray-500'>Belongs to <span className='text-gray-500 font-bold'>{item.strCategory}</span> Category</h1>
          <button onClick={handleClick} className='mt-2 text-[20px] cursor-pointer text-white bg-red-500 p-2 px-3 rounded-md font-bold'>Read More</button>
        </div>

      </span>
      
      {ingrediantCompo && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 flex items-center justify-center z-50">
            <Ingrediants item={item} onClose={() => setIngrediantCompo(false)} />

          </div>
        )}

        {
          console.log(item)
        }
    </>
  )
}

export default Card