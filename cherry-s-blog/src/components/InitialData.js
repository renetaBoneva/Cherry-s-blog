import { Navigate } from "react-router-dom";
import { useContext } from "react";

import { jsonInitialStore } from '../initialRecipesState'
import { RecipeContext } from "../contexts/RecipesContext";
import { AuthContext } from "../contexts/AuthContext";

export function InitialData() {
    const {
        isAuthenticated,
        onLoginHandler,
        onLogoutHandler } = useContext(AuthContext);
    const { createRecipeHandler } = useContext(RecipeContext);

    if (isAuthenticated) {
        jsonInitialStore.map(createRecipeHandler);
    } else {
        // onLoginHandler({ email: "peter@abv.bg", password: "123456" })
        //     .then(res => {
        //         jsonInitialStore.map(createRecipeHandler)
        //     })
    }

    return (
        <Navigate to={'/catalog'}></Navigate>
    )
}