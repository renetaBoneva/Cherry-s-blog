import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RecipeContext } from "../../contexts/RecipesContext";
import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { recipesServiceFactory } from "../../services/recipesService";

export function RecipeDetails() {
    document.body.style.backgroundImage = `none`;
    document.body.style.backgroundColor = '#C6CACB';

    const { recipeId } = useParams();
    const [currentRecipe, setCurrentRecipe] = useState({});
    const recipeService = useService(recipesServiceFactory);
    const { onCommentSubmit } = useContext(RecipeContext);
    const { values, changeValues, onSubmitClick } = useForm({
        comment: ""
    }, onCommentSubmit)

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(res => setCurrentRecipe(res))
            .catch(err => console.log(err.message))
    }, [recipeId])

    console.log("//TODO get comments");
    const ingredients = currentRecipe.ingredients;
    const method = currentRecipe.method;

    return (
        <main>
            <section id="detailsSection">
                <div className="wrapper">
                    <div id="recipeHeader">
                        <div id="imgDiv">
                            <img src={currentRecipe.imageUrl} alt="cherryCake" />
                        </div>
                        <div id="nameDiv">
                            <h2>{currentRecipe.title}</h2>
                            <div id="iconsDiv">
                                <Link to={`/recipes/${currentRecipe._id}/edit`}>
                                    <i className="bi bi-pencil-fill"></i>
                                </Link>
                                <Link to={`/recipes/${currentRecipe._id}/delete`}>
                                    <i className="bi bi-trash"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div id="description">
                        <div id="ingredientsDiv">
                            <h3>Ingredients</h3>
                            <p>
                                {ingredients?.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {item}
                                        {index !== ingredients.length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                        <div id="methodsDiv">
                            <h3>Method</h3>
                            <p>
                                {method?.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {item}
                                        {index !== method.length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </p>

                        </div>
                    </div>
                    <div id="comments">
                        <h3>Comments</h3>

                        <div className="comment">
                            <div className="imgPlace">
                                <i className="bi bi-person-fill"></i>
                            </div>
                            <div className="comPlace">
                                <p className="name">Lili Semizova</p>
                                <p className="content">That’s my favorite cake to cook! </p>
                            </div>
                        </div>

                        <form method="POST" id="newCommentForm" onSubmit={onSubmitClick}>
                            <textarea
                                placeholder="Add new comment..."
                                name="commentValue"
                                value={values.comment}
                                onChange={changeValues}
                            ></textarea>
                            <button><i className="bi bi-send-fill"></i></button>
                        </form>
                    </div>

                </div>
            </section>
        </main>
    )
}