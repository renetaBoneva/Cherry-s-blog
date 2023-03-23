export function UserProfileEdit() {
    document.body.style.backgroundImage = `url('/img/yellowGreenBgr.png')`;

    return (
        <main style={{
            display: "flex",
            justifyContent: "center"
        }}>
            
            <section id="editSection" class="wrapper">
                <form>
                    <h2>Edit profile</h2>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" defaultValue="Reneta Boneva"/>
                    <label htmlFor="email">E-mail: </label>
                    <input type="text" name="email" defaultValue="reneta.boneva@abv.bg"/>
                    <label htmlFor="password">Old password: </label>
                    <input type="password" name="password"/>
                    <label htmlFor="rePass">New password: </label>
                    <input type="password" name="rePass"/>
                    <label htmlFor="location">Location: </label>
                    <input type="text" name="location" defaultValue="Burgas, Bulgaria"/>
                    <label htmlFor="image">Image: </label>
                    <input type="text" name="image" defaultValue="" alt="profilePhoto"/>
                    <label htmlFor="level" >Level: </label>
                    <input type="text" name="level" defaultValue="Beginner"/>
    
                    <input type="submit" value="SUBMIT"/>
                </form>			
            </section>
    
        </main>

    );
}