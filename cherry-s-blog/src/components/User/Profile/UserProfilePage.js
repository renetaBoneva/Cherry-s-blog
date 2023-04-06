import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import { useService } from "../../../hooks/useService"
import { recipesServiceFactory } from "../../../services/recipesService";
import { CatalogSection } from "../../Catalog/CatalogSection";

export function UserProfilePage() {
    document.body.style.backgroundImage = `none`;
    document.body.style.backgroundColor = '#E78DBD';

    const [recipesArr, setRecipesArr] = useState([]);
    const { auth, userId } = useContext(AuthContext);
    const recipeService = useService(recipesServiceFactory);

    useEffect(() => {
        recipeService.getUsersRecipes(userId)
            .then(res => setRecipesArr(res))
            .catch(err => console.log(err.message))
    }, [userId])

    return (
        <main style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <section id="myProfileSection" className="wrapper">
                <div id="profileDiv">
                    {auth.imageUrl ? (
                        <img src={auth.imageUrl} id="profileImg" alt="profilePhoto" />
                    ) : (
                        <div id="profileImg">
                            <i className="bi bi-person-fill"></i>
                        </div>
                    )}

                    <div id="profileInfo">
                        <div className="infoDiv">
                            <p>Username: </p>
                            <p>{auth.username}</p>
                        </div>
                        <div className="infoDiv">
                            <p>E-mail: </p>
                            <p>{auth.email}</p>
                        </div>
                        <div className="infoDiv">
                            <p>Level: </p>
                            <p>{auth.level}</p>
                        </div>
                        {auth.location && (
                            <div className="infoDiv">
                                <p>Location: </p>
                                <p>{auth.location}</p>
                            </div>
                        )}

                    </div>
                    <div id="editIcons">
                        <Link to={`/users/${auth._id}/edit`}>
                            <i className="bi bi-pencil-fill"></i>
                        </Link>
                    </div>
                </div>
                <div id="yourRecipes">
                    <h2>Your recipes</h2>
                    <CatalogSection recipesArr={recipesArr} />
                </div>

            </section>
        </main>
    );
}