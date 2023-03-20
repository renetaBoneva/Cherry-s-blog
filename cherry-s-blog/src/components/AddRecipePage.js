export function AddRecipePage() {
    document.body.style.backgroundImage = `url('/img/greenPinkBgr.png')`;

    return (
        <main style={{
            display: "flex",
            justifyContent: "center"
        }}>

            <section id="addRecipeSection" class="wrapper">
                <form>
                    <h2>Add recipe</h2>
                    <label name="title" >Title: </label>
                    <input type="text" name="title" />
                    <label name="image">Image: </label>
                    <input type="text" name="image" />
                    <label name="ingredients">Ingredients: </label>
                    <textarea type="text" rows="5" name="ingredients"></textarea> 
                    <label name="method">Method: </label>
                    <textarea type="text" rows="5" name="method"></textarea>

                    <input type="submit" defaultValue="SUBMIT" />
                </form>
            </section>

        </main>
    );
}