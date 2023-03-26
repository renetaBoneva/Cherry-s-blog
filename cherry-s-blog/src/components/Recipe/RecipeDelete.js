import { useState } from "react";

export function RecipeDelete() {
    document.body.style.backgroundImage = `url('/img/pinkGreenBgr.png')`;

    const [formData, setFormData] = useState({
        title: "Cherry Cake",
        imageUrl: "cherryCake.jpg",
        ingredients: "200g soft unsalted butter, plus extra for the tin\n200g golden caster sugar\n4 eggs\n2 tsp vanilla extract\n1 tsp almond extract (optional)\n75g glacé cherries, patted dry if in syrup, then quartered\n175g self-raising flour50g ground almonds\n½ tsp baking powder",
        method: "STEP 1\nHeat the oven to 180C/160C fan/gas 4. Butter a 900g loaf tin and line with baking parchment. Beat the butter and sugar together until pale and fluffy, then beat in the eggs one at a time, followed by the vanilla and almond extract (if using).\nSTEP 2\nToss the cherries with 2 tbsp of the flour in a bowl. Tip the rest of the flour, the ground almonds, baking powder and a pinch of salt into the bowl with the sugar and eggs, and mix until just combined. Fold in the cherries and any remaining flour in the bowl.\nSpoon into the prepared tin and smooth over the top.\n STEP 3\n Bake for 50-55 mins, or until a skewer inserted in the middle comes out clean. Leave to cool for 10 mins in the tin, then transfer to a wire rack to cool completely. Serve as it is, or mix the icing sugar with the extract and enough milk to make a thick but pourable consistency. Drizzle over the loaf cake, and scatter over the flaked almonds to serve.\n"
    });
    console.log("//TODO Get info for current recipe");

    function onDeleteRecipeSubmit(e) {
        e.preventDefault();
        console.log(formData);
        console.log('//TODO Send delete request to the server');
    }

    return (
        <main>
            <section id="deleteRecipeSection" className="wrapper">
                <form onSubmit={onDeleteRecipeSubmit}>
                    <h2>Delete recipe</h2>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" value={formData.title} onChange={()=>{}} disabled={true} />
                    <label htmlFor="imageUrl">Image: </label>
                    <input type="text" name="imageUrl" value={formData.imageUrl} onChange={()=>{}} disabled={true} />
                    <label htmlFor="ingredients">Ingredients: </label>
                    <textarea type="text" name="ingredients" rows="5" value={formData.ingredients} onChange={()=>{}}  disabled={true} ></textarea>
                    <label htmlFor="method">Method: </label>
                    <textarea type="text" name="method" rows="5" value={formData.method} onChange={()=>{}}  disabled={true}></textarea>

                    <input type="submit" value="SUBMIT" />
                </form>
            </section>
        </main>
    );
}