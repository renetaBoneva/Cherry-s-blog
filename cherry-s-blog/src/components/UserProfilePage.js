import { Link } from "react-router-dom";

export function UserProfilePage() {    
    document.body.style.backgroundImage = `none`;
    document.body.style.backgroundColor= '#E78DBD';

    return (
        <main style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <section id="myProfileSection" class="wrapper">
            <div id="profileDiv">
                <div id="profileImg">
                    <i class="bi bi-person-fill"></i>		
                </div>
                <div id="profileInfo">
                    <div class="infoDiv">
                        <p>Username: </p>
                        <p>Reneta Boneva</p>
                    </div>
                    <div class="infoDiv">
                        <p>Level: </p>
                        <p>Beginner</p>
                    </div>
                    <div class="infoDiv">
                        <p>Location: </p>
                        <p>Burgas, Bulgaria</p>
                    </div>
                    <div class="infoDiv">
                        <p>E-mail: </p>
                        <p>reneta.boneva@abv.bg</p>
                    </div>
                    
                </div>	
                <div id="editIcons">
                    <Link to={"/editProfile"}>
                        <i class="bi bi-pencil-fill"></i>
                    </Link>	
                </div>		
            </div>
            <div id="yourRecipes">
                <h2>Your recipes</h2>
    
                <div id="recipesWrapper">
                        <div class="recipe">
                            <img src="./img/cherryCake.jpg" alt="cherryCake"/>
                            <h3><a href="/recipes/">Cherry cake</a></h3>			
                        </div>
                        <div class="recipe">
                            <img src="./img/cherryPie.jpg" alt="cherryPie"/>
                            <h3><a href="/recipes/">Cherry pie</a></h3>			
                        </div>
                        <div class="recipe">
                            <img src="./img/chocCherry.jpg" alt="chocCherry"/>
                            <h3><a href="/recipes/">Chocolate cherry cheesecake</a></h3>
                        </div>
                </div>
            </div>
                
            </section>		
        </main>
    );
}