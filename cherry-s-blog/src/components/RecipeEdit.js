export function RecipeEdit() {
    document.body.style.backgroundImage = `url('/img/yellowPinkBgr.png')`;

    return (
        <main style={{
            display: "flex",
            justifyContent: "center"
        }}>

            <section id="editRecipeSection" class="wrapper">
                <form>
                    <h2>Edit recipe</h2>
                    <label>Title: </label>
                    <input type="text" name="title" value="Cherry Cake" />
                    <label>Image: </label>
                    <input type="text" name="image" value="cherryCake.jpg" />
                    <label>Ingredients: </label>
                    <textarea type="text" name="ingredients" rows="5">
                        200g soft unsalted butter, plus extra for the tin
                        200g golden caster sugar
                        4 eggs
                        2 tsp vanilla extract
                        1 tsp almond extract (optional)
                        75g glacé cherries, patted dry if in syrup, then quartered
                        175g self-raising flour
                        50g ground almonds
                        ½ tsp baking powder
                    </textarea>
                    <label>Method: </label>
                    <textarea type="text" name="method" rows="5">
                        STEP 1
                        Heat the oven to 180C/160C fan/gas 4. Butter a 900g loaf tin and line with baking parchment. Beat the butter and sugar together until pale and fluffy, then beat in the eggs one at a time, followed by the vanilla and almond extract (if using).
                        STEP 2
                        Toss the cherries with 2 tbsp of the flour in a bowl. Tip the rest of the flour, the ground almonds, baking powder and a pinch of salt into the bowl with the sugar and eggs, and mix until just combined. Fold in the cherries and any remaining flour in the bowl. Spoon into the prepared tin and smooth over the top.
                        STEP 3
                        Bake for 50-55 mins, or until a skewer inserted in the middle comes out clean. Leave to cool for 10 mins in the tin, then transfer to a wire rack to cool completely. Serve as it is, or mix the icing sugar with the extract and enough milk to make a thick but pourable consistency. Drizzle over the loaf cake, and scatter over the flaked almonds to serve.
                    </textarea>
                    <input type="submit" defaultValue="SUBMIT" />
                </form>
            </section>

        </main>
    );
}