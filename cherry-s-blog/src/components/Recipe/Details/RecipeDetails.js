import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useService } from "../../../hooks/useService";
import { recipesServiceFactory } from "../../../services/recipesService";
import { AuthContext } from "../../../contexts/AuthContext";

import { Comments } from "./Comments/Comments";

export function RecipeDetails() {
    document.body.style.backgroundImage = `none`;
    document.body.style.backgroundColor = '#C6CACB';

    const { recipeId } = useParams();
    const [currentRecipe, setCurrentRecipe] = useState({});
    const { userId } = useContext(AuthContext);

    const recipeService = useService(recipesServiceFactory);

    const isOwner = userId === currentRecipe._ownerId;

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(res => setCurrentRecipe(res))
            .catch(err => console.log(err.message))
    }, [recipeId])

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
                            {isOwner && (
                                <div id="iconsDiv">
                                    <Link to={`/recipes/${currentRecipe._id}/edit`}>
                                        <i className="bi bi-pencil-fill"></i>
                                    </Link>
                                    <Link to={`/recipes/${currentRecipe._id}/delete`}>
                                        <i className="bi bi-trash"></i>
                                    </Link>
                                </div>)}
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
                    <Comments recipeId={recipeId} />

                </div>
            </section>
        </main>
    )
}