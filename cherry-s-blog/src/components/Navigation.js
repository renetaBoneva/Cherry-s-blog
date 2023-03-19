export function Navigation() {
    return (

        <header>
            <nav className="wrapper">
                <div>
                    <a href="./index.html">
                        <img src="./img/logo1.png" alt="logo" />
                    </a>
                </div>

                <div>
                    <ul id="navUL">
                        <li><a href="./index.html">Catalog</a></li>
                        {/* <!-- Guest menu --> */}
                        <li><a href="./login.html">Login</a></li>
                        <li><a href="./register.html">Register</a></li>
                        {/* <!-- Logged in user menu --> */}
                        <li><a href="./addRecipe.html">Add recipe</a></li>
                        <li><a href="./profile.html">My profile</a></li>
                        <li><a href="/logout">Logout</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}