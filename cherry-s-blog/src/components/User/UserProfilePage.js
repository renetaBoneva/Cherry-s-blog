import { Link } from "react-router-dom";

export function UserProfilePage() {    
    document.body.style.backgroundImage = `none`;
    document.body.style.backgroundColor= '#E78DBD';

    return (
        <main style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <section id="myProfileSection" className="wrapper">
            <div id="profileDiv">
                <div id="profileImg">
                    <i className="bi bi-person-fill"></i>		
                </div>
                <div id="profileInfo">
                    <div className="infoDiv">
                        <p>Username: </p>
                        <p>Reneta Boneva</p>
                    </div>
                    <div className="infoDiv">
                        <p>Level: </p>
                        <p>Beginner</p>
                    </div>
                    <div className="infoDiv">
                        <p>Location: </p>
                        <p>Burgas, Bulgaria</p>
                    </div>
                    <div className="infoDiv">
                        <p>E-mail: </p>
                        <p>reneta.boneva@abv.bg</p>
                    </div>
                    
                </div>	
                <div id="editIcons">
                    <Link to={"/users/:id/edit"}>
                        <i className="bi bi-pencil-fill"></i>
                    </Link>	
                </div>		
            </div>
            <div id="yourRecipes">
                <h2>Your recipes</h2>
    
                <div id="recipesWrapper">
                        <div className="recipe">
                            <img src="/img/cherryCake.jpg" alt="cherryCake"/>
                            <h3><Link to={"/recipes/"}>Cherry cake</Link></h3>			
                        </div>
                        <div className="recipe">
                            <img src="/img/cherryPie.jpg" alt="cherryPie"/>
                            <h3><Link to={"/recipes/"}>Cherry pie</Link></h3>			
                        </div>
                        <div className="recipe">
                            <img src="/img/chocCherry.jpg" alt="chocCherry"/>
                            <h3><Link to={"/recipes/"}>Chocolate cherry cheesecake</Link></h3>
                        </div>
                </div>
            </div>
                
            </section>		
        </main>
    );
}