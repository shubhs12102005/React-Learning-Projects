import React, { useState, useContext } from 'react'
import { RecipeContext } from '../Context/DataContext';
import Card from './Card';


const Main = () => {

  const { recipe, setRecipe } = useContext(RecipeContext);

  return (
    <div className=''>
      <div className='flex justify-center'>
        {Object.keys(recipe).length <= 0 ? (
          <h1 className='text-3xl text-white mt-6 font-bold'>Search your Favourite Recipe</h1>
        ) : (
          <div className='w-[90%] flex flex-wrap justify-center gap-20 mt-6' >
            {
              recipe.meals.map((item, index) => (
                <Card item={item} key={index} />
              ))
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default Main