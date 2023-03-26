import { useState } from "react";

export function AddRecipePage({
    setRecipesData
}) {
    const [formData, setFormData] = useState({
        title: "",
        imageUrl: "",
        ingredients: "",
        method: ""
    });

    document.body.style.backgroundImage = `url('/img/greenPinkBgr.png')`;
    
    function onCreateFormChange(e) {
        setFormData(state => ({ ...state, [e.target.name]: e.target.value }))
    }
    
    function onCreateRecipeSubmit(e) {
        e.preventDefault();
        
        console.log('//TODO: Send post request to the server');
        setRecipesData(state => [...state, formData]);
    }

    return (
        <main style={{
            display: "flex",
            justifyContent: "center"
        }}>

            <section id="addRecipeSection" className="wrapper">
                <form onSubmit={onCreateRecipeSubmit}>
                    <h2>Add recipe</h2>
                    <label htmlFor="title" >Title: </label>
                    <input type="text" name="title" value={formData.title} onChange={onCreateFormChange} />
                    <label htmlFor="imageUrl">Image: </label>
                    <input type="text" name="imageUrl" value={formData.imageUrl} onChange={onCreateFormChange} />
                    <label htmlFor="ingredients">Ingredients: </label>
                    <textarea type="text" rows="5" name="ingredients" value={formData.ingredients} onChange={onCreateFormChange}></textarea>
                    <label htmlFor="method">Method: </label>
                    <textarea type="text" rows="5" name="method" value={formData.method} onChange={onCreateFormChange}></textarea>

                    <input type="submit" value="SUBMIT" />
                </form>
            </section>

        </main>
    );
}