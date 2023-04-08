import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../../contexts/RecipesContext";
import { useService } from "../../hooks/useService";
import { recipesServiceFactory } from "../../services/recipesService";
import { useForm } from "../../hooks/useForm";

export function RecipeEdit() {
    document.body.style.backgroundImage = `url('/img/yellowPinkBgr.png')`;

    const { recipeId } = useParams();
    const { editRecipeHandler } = useContext(RecipeContext);
    const recipeService = useService(recipesServiceFactory)
    const { values,
        changeValues,
        onSubmitClick,
        validateData,
        isValid,
        isDisabled,
        editValues } = useForm({
            _id: recipeId,
            title: "",
            imageUrl: "",
            ingredients: "",
            method: ""
        }, editRecipeHandler);

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(res => {
                res.method = res.method.join('\n');
                res.ingredients = res.ingredients.join('\n');
                editValues(res)
            })
            .catch(err => console.log(err.message))
    }, [recipeId])


    return (
        <main style={{
            display: "flex",
            justifyContent: "center"
        }}>

            <section id="editRecipeSection" className="wrapper">
                <form method="POST" onSubmit={onSubmitClick}>
                    <h2>Edit recipe</h2>
                    <label htmlFor="title">Title: </label>
                    <input
                        type="text"
                        name="title"
                        value={values.title}
                        onChange={changeValues}
                        onBlur={validateData}
                    />
                    {isValid.title && isValid.title !== "" && <p className="errParagraph">{isValid.title}</p>}

                    <label htmlFor="imageUrl">Image: </label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeValues}
                        onBlur={validateData}
                    />
                    {isValid.imageUrl && isValid.imageUrl !== "" && <p className="errParagraph">{isValid.imageUrl}</p>}

                    <label htmlFor="ingredients">Ingredients: </label>
                    <textarea
                        type="text"
                        name="ingredients"
                        rows="5"
                        value={values.ingredients}
                        onChange={changeValues}
                        onBlur={validateData}
                    ></textarea>
                    {isValid.ingredients && isValid.ingredients !== "" && <p className="errParagraph">{isValid.ingredients}</p>}


                    <label htmlFor="method">Method: </label>
                    <textarea
                        type="text"
                        name="method"
                        rows="5"
                        value={values.method}
                        onChange={changeValues}
                        onBlur={validateData}
                    ></textarea>                    
                    {isValid.method && isValid.method !== "" && <p className="errParagraph">{isValid.method}</p>}

                    <input type="submit" value="EDIT" disabled={isDisabled} />
                </form>
            </section>

        </main>
    );
}