import axios from 'axios';
import React, { useState, useContext } from 'react'
import { RecipeContext } from '../Context/DataContext';

const Header = () => {
    const [value, setValue] = useState('');
    const { setRecipe } = useContext(RecipeContext);

    const onChange = (e) => {
        setValue(e.target.value);
        console.log(value);
    }

    const FindRecipe = async () => {
        if (value.length > 0) {
            let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
            setRecipe(data);
            console.log(data);
        } else {
            alert('Please enter a recipe name');
        }
    };


    return (
        <div>
            <div className='flex justify-between items-center bg-[#212121] p-5'>
                <h1 className='text-4xl font-bold ml-12'>Recipe App</h1>

                <div>
                    <input onChange={(e) => onChange(e)} className='border border-orange-500 w-[500px] bg-[#fff] rounded-[5px] text-black outline-none p-2' placeholder='Search for Recipe' type="text" />
                    <button onClick={FindRecipe} className='cursor-pointer text-white bg-red-500 p-3 px-4 rounded-md ml-3 mr-10 font-bold'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Header