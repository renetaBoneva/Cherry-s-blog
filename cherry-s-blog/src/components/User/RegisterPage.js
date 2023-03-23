export function RegisterPage() {
    document.body.style.backgroundImage = `url('/img/yellowPinkBgr.png')`;

    return (        
	<main style={{
        display: "flex",
        justifyContent: "center"
    }}>
		
		<section id="registerSection" class="wrapper">
			<form>
				<h2>Register</h2>
				<label htmlFor="username">Username: </label>
				<input type="text" name="username"/>
				<label htmlFor="email">E-mail: </label>
				<input type="text" name="email"/>
				<label htmlFor="password">Password: </label>
				<input type="password" name="password"/>
				<label htmlFor="rePass">Repeat password: </label>
				<input type="password" name="rePass"/>
				<label htmlFor="location">Location: </label>
				<input type="text" name="location"/>
				<label htmlFor="image">Image: </label>
				<input type="text" name="image"/>
				<label htmlFor="level">Level: </label>
				<input type="text" name="level"/>

				<input type="submit" defaultValue="SUBMIT"/>
			</form>			
		</section>

	</main>
    );
}