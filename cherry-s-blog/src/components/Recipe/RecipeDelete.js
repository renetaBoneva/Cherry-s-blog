import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useService } from "../../hooks/useService";
import { recipesServiceFactory } from "../../services/recipesService";
import { RecipeContext } from "../../contexts/RecipesContext";
import { useForm } from "../../hooks/useForm";

export function RecipeDelete() {
    document.body.style.backgroundImage = `url('/img/pinkGreenBgr.png')`;

    const { recipeId } = useParams();
    const {deleteRecipeHandler} = useContext(RecipeContext);
    const recipeService = useService(recipesServiceFactory)
    const {values, changeValues, onSubmitClick, editValues} = useForm({
        _id: recipeId,
        title: "",
        imageUrl: "",
        ingredients: "",
        method: ""
    }, deleteRecipeHandler);

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(res => editValues(res))
            .catch(err => console.log(err.message))
    }, [recipeId])


    return (
        <main>
            <section id="deleteRecipeSection" className="wrapper">
                <form onSubmit={onSubmitClick}>
                    <h2>Delete recipe</h2>
                    <label htmlFor="title">Title: </label>
                    <input
                        type="text"
                        name="title"
                        value={values.title}
                        onChange={() => { }}
                        disabled={true}
                    />
                    <label htmlFor="imageUrl">Image: </label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={() => { }}
                        disabled={true} />
                    <label htmlFor="ingredients">Ingredients: </label>
                    <textarea
                        type="text"
                        name="ingredients"
                        rows="5"
                        value={values.ingredients}
                        onChange={() => { }}
                        disabled={true}
                    ></textarea>
                    <label htmlFor="method">Method: </label>
                    <textarea
                        type="text"
                        name="method"
                        rows="5"
                        value={values.method}
                        onChange={() => { }}
                        disabled={true}>
                    </textarea>

                    <input type="submit" value="DELETE" />
                </form>
            </section>
        </main>
    );
}