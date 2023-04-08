import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { useForm } from '../../hooks/useForm'

export function Login() {
    document.body.style.backgroundImage = `url('/img/pinkYellowBgr.png')`;

    const { onLoginHandler } = useContext(AuthContext);
    const { values, changeValues, onSubmitClick, isError } = useForm({
        email: "",
        password: ""
    }, onLoginHandler)

    return (
        <main style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <section id="loginSection" className="wrapper">
                <form method="POST" onSubmit={onSubmitClick}>
                    <h2>Login</h2>
                    <label htmlFor="email">E-mail: </label>
                    <input
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={changeValues}
                    />
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={changeValues}
                    />
                    {isError && (
                        <p className="errParagraph">{isError}</p>
                    )}
                    <input type="submit" value="LOGIN" />
                </form>
            </section>
        </main>)
}