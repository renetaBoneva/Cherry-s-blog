import { createContext, useEffect, useState } from "react";

import { recipesServiceFactory } from "../services/recipesService";
import { useService } from "../hooks/useService";
import { useNavigate } from "react-router-dom";

export const RecipeContext = createContext();

export function RecipesProvider({ children }) {
    const [recipesData, setRecipesData] = useState([]);
    const navigate = useNavigate();
    const recipesService = useService(recipesServiceFactory);

    useEffect(() => {
        recipesService.getAll()
            .then(res => {
                setRecipesData(res);
            })
            .catch((err) => {
                if (err.message === "Resource not found") {
                    setRecipesData({})
                    console.log('//TODO logout');
                    navigate('/initialData')
                } else {
                    console.log(err.message)
                }
            });
    }, [])

    async function createRecipeHandler(data) {
        data = prepareData(data);
        let result = await recipesService.create(data);

        // result = result.result;

        console.log(result);
        setRecipesData(state => ([ ...state, result ]))
        
        navigate('/catalog')
    }

    async function editRecipeHandler(data) {
        const id = data._id;
        data = prepareData(data);
        try {
            let result = await recipesService.edit(id, data);
            setRecipesData(state => state.map(r => r._id === id ? result : r));
        } catch (err) {
            console.log(err.message);
        }
        navigate(`/recipes/${id}/details`);
    }

    async function deleteRecipeHandler(data) {
        const id = data._id;
        try {
            const result = await recipesService.del(id);
            setRecipesData(state => state.filter(r => r._id !== id))
        }
        catch (err) {
            console.log(err.message);
        }
        navigate('/catalog');
    }


    const context = {
        recipesData,
        setRecipesData,
        createRecipeHandler,
        deleteRecipeHandler,
        editRecipeHandler
    };

    return (
        <>
            <RecipeContext.Provider value={context}>
                {children}
            </RecipeContext.Provider>
        </>
    )
}

function prepareData(data) {  
    data.method = data.method.split('\n');
    data.ingredients = data.ingredients.split('\n');
    return data;
}