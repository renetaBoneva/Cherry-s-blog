import { useState } from "react";

export function RegisterPage() {
	const [registerFormData, setRegisterFormData] = useState({
		username: "",
		email: "",
		password: "",
		rePass: "",
		location: "",
		imageUrl: "",
		level: ""
	})
    document.body.style.backgroundImage = `url('/img/yellowPinkBgr.png')`;

	function onChange(e){
		setRegisterFormData(state => ({...state, [e.target.name]: e.target.value}))
	}

	function onRegisterSubmit(e) {
		e.preventDefault();
	}

    return (        
	<main style={{
        display: "flex",
        justifyContent: "center"
    }}>
		
		<section id="registerSection" className="wrapper">
			<form onSubmit={onRegisterSubmit}>
				<h2>Register</h2>
				<label htmlFor="username">Username: </label>
				<input type="text" name="username" value={registerFormData.username} onChange={onChange} />
				<label htmlFor="email">E-mail: </label>
				<input type="text" name="email" value={registerFormData.email} onChange={onChange} />
				<label htmlFor="password">Password: </label>
				<input type="password" name="password" value={registerFormData.password} onChange={onChange} />
				<label htmlFor="rePass">Repeat password: </label>
				<input type="password" name="rePass" value={registerFormData.rePass} onChange={onChange} />
				<label htmlFor="location">Location: </label>
				<input type="text" name="location" value={registerFormData.location} onChange={onChange} />
				<label htmlFor="imageUrl">Image: </label>
				<input type="text" name="imageUrl" value={registerFormData.imageUrl} onChange={onChange} />
				<label htmlFor="level">Level: </label>
				<input type="text" name="level"  value={registerFormData.level} onChange={onChange} />

				<input type="submit" defaultValue="SUBMIT"/>
			</form>			
		</section>

	</main>
    );
}