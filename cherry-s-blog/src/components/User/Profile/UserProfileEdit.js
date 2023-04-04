import { useContext, useEffect } from "react";
import { useForm } from "../../../hooks/useForm";
import { AuthContext } from "../../../contexts/AuthContext";

export function UserProfileEdit() {
    document.body.style.backgroundImage = `url('/img/yellowGreenBgr.png')`;

    const { getDetails, EditUserProfile } = useContext(AuthContext)
    const { values, changeValues, onSubmitClick, editValues } = useForm({
        username: "",
        email: "",
        password: "",
        rePass: "",
        location: "",
        imageUrl: "",
        level: ""
    }, EditUserProfile)

    useEffect(() => {
        getDetails()
            .then(res => {
                const { password, rePass, ...userData } = res;
                editValues(userData);
            })
    }, [])

    return (
        <main style={{
            display: "flex",
            justifyContent: "center"
        }}>

            <section id="editSection" className="wrapper">
                <form onSubmit={onSubmitClick}>
                    <h2>Edit profile</h2>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={changeValues}
                    />
                    <label htmlFor="email">E-mail: </label>
                    <input
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={changeValues}
                    />
                    <label htmlFor="password">New password: </label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={changeValues}
                    />
                    <label htmlFor="rePass">Repeat password: </label>
                    <input
                        type="password"
                        name="rePass"
                        value={values.rePass}
                        onChange={changeValues}
                    />
                    <label htmlFor="location">Location: </label>
                    <input
                        type="text"
                        name="location"
                        value={values.location}
                        onChange={changeValues}
                    />
                    <label htmlFor="imageUrl">Image: </label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeValues}
                        alt="profilePhoto"
                    />
                    <label htmlFor="level" >Level: </label>
                    <select name="level" value={values.level} onChange={changeValues}>
                        <option value={"Beginner"}>Beginner</option>
                        <option value={"Middle"}>Middle</option>
                        <option value={"Advanced"}>Advanced</option>
                    </select>

                    <input type="submit" value="EDIT" />
                </form>
            </section>

        </main>

    );
}