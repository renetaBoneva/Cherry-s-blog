import { createContext, useEffect, useState } from "react";

import { recipesServiceFactory } from "../services/recipesService";
import { useService } from "../hooks/useService";
import { useNavigate } from "react-router-dom";

export const RecipeContext = createContext();

export function RecipesProvider({ children }) {
const [recipesData, setRecipesData] = useState({});
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
        let result = await recipesService.create(data);
        result = result.result;
        setRecipesData(state => ({ ...state, result }))
    }

    async function onCommentSubmit(comment) {
        console.log(comment);
    }

    const context = {
        recipesData,
        setRecipesData,
        createRecipeHandler,
        onCommentSubmit
    };

    return (
        <>
            <RecipeContext.Provider value={context}>
                {children}
            </RecipeContext.Provider>
        </>
    )
}