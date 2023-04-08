import { useContext } from "react";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export function Register() {
	document.body.style.backgroundImage = `url('/img/yellowPinkBgr.png')`;

	const { onRegisterHandler } = useContext(AuthContext);
	const { values,
		changeValues,
		onSubmitClick,
		validateData,
		isValid,
		isDisabled, } = useForm({
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
						onBlur={validateData}
					/>
					{isValid.username && isValid.username !== "" && <p className="errParagraph">{isValid.username}</p>}

					<label htmlFor="email">E-mail: </label>
					<input
						type="text"
						name="email"
						value={values.email}
						onChange={changeValues}
						onBlur={validateData}
					/>
					{isValid.email && isValid.email !== "" && <p className="errParagraph">{isValid.email}</p>}

					<label htmlFor="password">Password: </label>
					<input
						type="password"
						name="password"
						value={values.password}
						onChange={changeValues}
						onBlur={validateData}
					/>
					{isValid.password && isValid.password !== "" && <p className="errParagraph">{isValid.password}</p>}
					
					<label htmlFor="rePass">Repeat password: </label>
					<input
						type="password"
						name="rePass"
						value={values.rePass}
						onChange={changeValues}
						onBlur={validateData}
					/>
					{isValid.rePass && isValid.rePass !== "" && <p className="errParagraph">{isValid.rePass}</p>}
					{isValid.passMatch && isValid.passMatch !== "" && <p className="errParagraph">{isValid.passMatch}</p>}

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

					<label htmlFor="level">Level: </label>
					<select name="level" value={values.level} onChange={changeValues}>
						<option value={"Beginner"}>Beginner</option>
						<option value={"Middle"}>Middle</option>
						<option value={"Advanced"}>Advanced</option>
					</select>

					<input type="submit" value="REGISTER" disabled={isDisabled} />
				</form>
			</section>

		</main>
	);
}