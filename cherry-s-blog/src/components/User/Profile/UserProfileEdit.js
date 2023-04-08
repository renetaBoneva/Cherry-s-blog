import { useContext, useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { AuthContext } from "../../../contexts/AuthContext";

export function UserProfileEdit() {
    document.body.style.backgroundImage = `url('/img/yellowGreenBgr.png')`;

    const { getDetails, EditUserProfile } = useContext(AuthContext)
    const { values,
        changeValues,
        onSubmitClick,
        validateData,
        isValid,
        isDisabled,
        editValues } = useForm({
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
                <form method="POST" onSubmit={onSubmitClick}>
                    <h2>Edit profile</h2>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={changeValues}
                        onBlur={validateData}
                    />
                    {isValid.username && isValid.username !== "" && <p className="errParagraph">{isValid.username}</p>}

                    <label htmlFor="location">Location: </label>
                    <input
                        type="text"
                        name="location"
                        value={values.location}
                        onChange={changeValues}
                        onBlur={validateData}
                    />
                    {isValid.location && isValid.location !== "" && <p className="errParagraph">{isValid.location}</p>}
                    <label htmlFor="imageUrl">Image: </label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeValues}
                        onBlur={validateData}
                    />
                    {isValid.imageUrl && isValid.imageUrl !== "" && <p className="errParagraph">{isValid.imageUrl}</p>}
                    <label htmlFor="level" >Level: </label>
                    <select name="level" value={values.level} onChange={changeValues}>
                        <option value="Beginner" >Beginner</option>
                        <option value="Middle" >Middle</option>
                        <option value="Advanced" >Advanced</option>
                    </select>

                    <input type="submit" value="EDIT" disabled={isDisabled} />
                </form>
            </section>

        </main>

    );
}