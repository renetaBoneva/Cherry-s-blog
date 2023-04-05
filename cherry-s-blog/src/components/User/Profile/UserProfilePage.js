import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

export function UserProfilePage() {
    document.body.style.backgroundImage = `none`;
    document.body.style.backgroundColor = '#E78DBD';

    const { auth } = useContext(AuthContext);

    console.log("//TODO Add user's recipes");
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

                    <div id="recipesWrapper">
                        <div className="recipe">
                            <img src="/img/cherryCake.jpg" alt="cherryCake" />
                            <h3><Link to={"/recipes/"}>Cherry cake</Link></h3>
                        </div>
                        <div className="recipe">
                            <img src="/img/cherryPie.jpg" alt="cherryPie" />
                            <h3><Link to={"/recipes/"}>Cherry pie</Link></h3>
                        </div>
                        <div className="recipe">
                            <img src="/img/chocCherry.jpg" alt="chocCherry" />
                            <h3><Link to={"/recipes/"}>Chocolate cherry cheesecake</Link></h3>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}