import { useContext } from "react";
import { RecipeContext } from "../../contexts/RecipesContext";
import { RecipeTemplateCatalog } from "./RecipeTemlateCatalog";

export function CatalogSection() {
  const { recipesData } = useContext(RecipeContext);

  return (
    <section id="catalogSection">

      <div className="wrapper">
        <h2>Catalog</h2>
        {recipesData.length > 0
          ? (
            <div id="recipesWrapper">
              {recipesData?.map(recipe => <RecipeTemplateCatalog key={recipe._id} {...recipe} />)}
            </div>
          )
          : (
            <div id="recipesWrapper" style={{ justifyContent: "center" }}>
              <h2 style={{ marginBottom: "40px" }}>No recipes yet</h2>
            </div>
          )}
      </div>

    </section>
  );
}