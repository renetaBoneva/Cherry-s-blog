import { useForm } from "../../hooks/useForm";

export function AddRecipePage() {
    document.body.style.backgroundImage = `url('/img/greenPinkBgr.png')`;
    const {values, chnageValues, onSubmitClick} = useForm({
            title: "",
            imageUrl: "",
            ingredients: "",
            method: ""
        }, (values) => console.log(values));

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
                        onChange={chnageValues}
                    />
                    <label htmlFor="imageUrl">Image: </label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={chnageValues}
                    />
                    <label htmlFor="ingredients">Ingredients: </label>
                    <textarea
                        type="text"
                        rows="5"
                        name="ingredients"
                        value={values.ingredients}
                        onChange={chnageValues}
                    ></textarea>
                   <label htmlFor="method">Method: </label>
                    <textarea
                        type="text"
                        rows="5"
                        name="method"
                        value={values.method}
                        onChange={chnageValues}
                    ></textarea>

                    <input type="submit" value="ADD" />
                </form>
            </section>

        </main>
    );
}