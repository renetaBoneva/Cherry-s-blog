import { useState } from "react";

export function LoginPage() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    document.body.style.backgroundImage = `url('/img/pinkYellowBgr.png')`;

    function onChange(e) {
        setLoginData(state => ({...state, [e.target.name]: e.target.value}))
    }
    return (
        <main style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <section id="loginSection" className="wrapper">
                <form>
                    <h2>Login</h2>
                    <label htmlFor="email">E-mail: </label>
                    <input type="text" name="email" value={loginData.email} onChange={onChange} />
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" value={loginData.password} onChange={onChange}  />
                    <input type="submit" value={"SUBMIT"} />
                </form>
            </section>
        </main>)
}