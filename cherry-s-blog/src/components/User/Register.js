import { useContext } from "react";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export function Register() {
	document.body.style.backgroundImage = `url('/img/yellowPinkBgr.png')`;

	const { onRegisterHandler } = useContext(AuthContext);
	const {values, changeValues, onSubmitClick} = useForm({
		username: "",
		email: "",
		password: "",
		rePass: "",
		location: "",
		imageUrl: "",
		level: "Beginner"
	}, onRegisterHandler)

    return (        
	<main style={{
        display: "flex",
        justifyContent: "center"
    }}>
		
		<section id="registerSection" className="wrapper">
			<form method="POST" onSubmit={onSubmitClick}>
				<h2>Register</h2>
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
				<label htmlFor="password">Password: </label>
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
				/>
				<label htmlFor="level">Level: </label>
				<select name="level" value={values.level} onChange={changeValues}>
					<option value={"Beginner"}>Beginner</option>
					<option value={"Middle"}>Middle</option>
					<option value={"Advanced"}>Advanced</option>
				</select>

				<input type="submit" defaultValue="REGISTER"/>
			</form>			
		</section>

	</main>
    );
}