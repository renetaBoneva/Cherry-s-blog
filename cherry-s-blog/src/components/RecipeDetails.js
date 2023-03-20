import { Link } from "react-router-dom";

export function RecipeDetails() {
    document.body.style.backgroundImage = `none`;
    document.body.style.backgroundColor= '#C6CACB';

    return (

        <main>
            <section id="detailsSection">
                <div className="wrapper">
                    <div id="recipeHeader">
                        <div id="imgDiv">
                            <img src="/img/cherryCake.jpg" alt="cherryCake"/>
                        </div>
                        <div id="nameDiv">
                            <h2>Cherry cake</h2>
                            <div id="iconsDiv">
                                <Link href="/recipes/id/edit">
                                    <i className="bi bi-pencil-fill"></i>
                                </Link>
                                <Link href="/recipes/id/delete">
                                    <i className="bi bi-trash"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div id="description">
                        <div id="ingredientsDiv">
                            <h3>Ingredients</h3>
                            <p>
                                200g soft unsalted butter,plus extra for the tin<br />
                                200g golden caster sugar<br />
                                4 eggs<br />
                                2 tsp vanilla extract<br />
                                1 tsp almond extract (optional)<br />
                                75g glacé cherries, patted dry if in syrup, then quartered<br />
                                175g self-raising flour<br />
                                50g ground almonds<br />
                                ½ tsp baking powder<br />
                            </p>
                        </div>
                        <div id="methodsDiv">
                            <h3>Method</h3>
                            <p>
                                STEP 1<br />
                                Heat the oven to 180C/160C fan/gas 4. Butter a 900g loaf tin and line with baking parchment. Beat the butter and sugar together until pale and fluffy, then beat in the eggs one at a time, followed by the vanilla and almond extract (if using).<br />
                                STEP 2<br />
                                Toss the cherries with 2 tbsp of the flour in a bowl. Tip the rest of the flour, the ground almonds, baking powder and a pinch of salt into the bowl with the sugar and eggs, and mix until just combined. Fold in the cherries and any remaining flour in the bowl. Spoon into the prepared tin and smooth over the top.<br />
                                STEP 3<br />
                                Bake for 50-55 mins, or until a skewer inserted in the middle comes out clean. Leave to cool for 10 mins in the tin, then transfer to a wire rack to cool completely. Serve as it is, or mix the icing sugar with the extract and enough milk to make a thick but pourable consistency. Drizzle over the loaf cake, and scatter over the flaked almonds to serve.
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

                        <form id="newCommentForm">
                            <textarea placeholder="Add new comment..."></textarea>
                            <button><i className="bi bi-send-fill"></i></button>
                        </form>
                    </div>

                </div>
            </section>
        </main>
    )
}