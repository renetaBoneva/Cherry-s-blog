import { useContext } from "react";
import { RecipeContext } from "../../contexts/RecipesContext";
import { RecipeTemplateCatalog } from "./RecipeTemlateCatalog";

export function CatalogSection({
  recipesArr
}) {

  const { recipesData } = useContext(RecipeContext);
  if (!recipesArr) {
    recipesArr = recipesData;
  }

  return (
    <>
      {recipesArr.length > 0
        ? (
          <div id="recipesWrapper">
            {recipesArr?.map(recipe => <RecipeTemplateCatalog key={recipe._id} {...recipe} />)}
          </div>
        )
        : (
          <div id="recipesWrapper" style={{ justifyContent: "center" }}>
            <h2 style={{ marginBottom: "40px" }}>No recipes yet</h2>
          </div>
        )}
    </>
  );
}