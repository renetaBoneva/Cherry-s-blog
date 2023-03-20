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
				<label>Username: </label>
				<input type="text" name="username"/>
				<label>E-mail: </label>
				<input type="text" name="email"/>
				<label>Password: </label>
				<input type="password" name="password"/>
				<label>Repeat password: </label>
				<input type="password" name="rePass"/>
				<label>Location: </label>
				<input type="text" name="location"/>
				<label>Image: </label>
				<input type="text" name="image"/>
				<label>Level: </label>
				<input type="text" name="level"/>

				<input type="submit" defaultValue="SUBMIT"/>
			</form>			
		</section>

	</main>
    );
}