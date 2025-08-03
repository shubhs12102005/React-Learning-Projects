import React, { createContext, useState } from 'react'

export const RecipeContext = createContext();

const DataContext = ({ children }) => {

    const [recipe, setRecipe] = useState({});
    console.log(recipe);

    return (
        <RecipeContext.Provider value={{
            recipe,
            setRecipe
        }}>
            {children}
        </RecipeContext.Provider>
    )
}

export default DataContext