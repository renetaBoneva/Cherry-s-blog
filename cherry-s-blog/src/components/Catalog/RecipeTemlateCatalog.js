import { Link } from "react-router-dom";

export function RecipeTemplateCatalog({
    _id,
    imageUrl,
    title
}) {
    return (
        <div className="recipe">
            <img src={imageUrl} alt={title} />
            <h3> <Link to={`/recipes/${_id}/details`}>{title}</Link></h3>
        </div>
    )
}