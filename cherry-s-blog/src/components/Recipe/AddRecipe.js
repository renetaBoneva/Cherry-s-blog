import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { RecipeContext } from "../../contexts/RecipesContext";

export function AddRecipe() {
    document.body.style.backgroundImage = `url('/img/greenPinkBgr.png')`;
    const { createRecipeHandler } = useContext(RecipeContext);
    const { values, changeValues, onSubmitClick } = useForm({
        title: "",
        imageUrl: "",
        ingredients: "",
        method: ""
    }, createRecipeHandler);

    return (
        <main style={{
            display: "flex",
            justifyContent: "center"
        }}>

            <section id="addRecipeSection" className="wrapper">
                <form method="POST" onSubmit={onSubmitClick}>
                    <h2>Add recipe</h2>
                    <label htmlFor="title" >Title: </label>
                    <input
                        type="text"
                        name="title"
                        value={values.title}
                        onChange={changeValues}
                    />
                    <label htmlFor="imageUrl">Image: </label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeValues}
                    />
                    <label htmlFor="ingredients">Ingredients: </label>
                    <textarea
                        type="text"
                        rows="5"
                        name="ingredients"
                        value={values.ingredients}
                        onChange={changeValues}
                    ></textarea>
                    <label htmlFor="method">Method: </label>
                    <textarea
                        type="text"
                        rows="5"
                        name="method"
                        value={values.method}
                        onChange={changeValues}
                    ></textarea>

                    <input type="submit" value="ADD" />
                </form>
            </section>

        </main>
    );
}