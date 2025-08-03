import React from 'react';

const Ingrediants = ({ item, onClose }) => {

    const ingrediants = () => {
        const ingrediantsList = [];

        for (let i = 1; i <= 20; i++) {
            const ingrediant = item[`strIngredient${i}`];
            const measure = item[`strMeasure${i}`];

            if (ingrediant) {
                ingrediantsList.push(
                    <li key={i} className="text-[18px] ml-12 list-disc">
                        {measure} - {ingrediant}
                    </li>
                );
            }
        }

        return ingrediantsList;
    };

    return (
        <div className='bg-[#694c2f] rounded-[10px] text-white w-[900px] h-[400px] p-4 relative flex flex-col text-4xl'>
            <h1 className='underline uppercase mt-2 text-center'>{item.strMeal}</h1>
            <h2 className='text-[25px] mt-4 ml-8 font-bold'>Ingredients:</h2>

            <ul className="mt-2">{ingrediants()}</ul>

            <button
                onClick={onClose}
                className="cursor-pointer absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded text-sm">
                X
            </button>
        </div>
    );
};

export default Ingrediants;
