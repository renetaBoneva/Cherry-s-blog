import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


export function Navigation() {
    const { isAuthenticated, userId } = useContext(AuthContext);

    return (
        <header>
            <nav className="wrapper">
                <div>
                    <Link to="/">
                        <img src="/img/logo1.png" alt="logo" />
                    </Link>
                </div>

                <div>
                    <ul id="navUL">
                        <li><Link to="/catalog">Catalog</Link></li>
                        {isAuthenticated ? (
                            <>
                            {/* <!-- Logged in user menu --> */}
                            <li><Link to="/addRecipe">Add recipe</Link></li>
                            <li><Link to={`/users/${userId}/profile`}>My profile</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                            </>
                        ) : ( 
                            <>                          
                            {/* <!-- Guest menu --> */}
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            </> 
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
}