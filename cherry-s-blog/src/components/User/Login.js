export function LoginPage() {
    document.body.style.backgroundImage = `url('/img/pinkYellowBgr.png')`;

    return (
        <main style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <section id="loginSection" className="wrapper">
                <form>
                    <h2>Login</h2>
                    <label htmlFor="email">E-mail: </label>
                    <input type="text" name="email" />
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" />
                    <input type="submit" value={"SUBMIT"} />
                </form>
            </section>
        </main>)
}