import { Link } from "react-router-dom";


export function Navigation() {
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
                        {/* <!-- Guest menu --> */}
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        {/* <!-- Logged in user menu --> */}
                        <li><Link to="/addRecipe">Add recipe</Link></li>
                        <li><Link to="/profile">My profile</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}