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
                    <label name="username">Username: </label>
                    <input type="text" name="username" defaultValue="Reneta Boneva"/>
                    <label name="email">E-mail: </label>
                    <input type="text" name="email" defaultValue="reneta.boneva@abv.bg"/>
                    <label name="password">Old password: </label>
                    <input type="password" name="password"/>
                    <label name="rePass">New password: </label>
                    <input type="password" name="rePass"/>
                    <label name="location">Location: </label>
                    <input type="text" name="location" defaultValue="Burgas, Bulgaria"/>
                    <label name="image">Image: </label>
                    <input type="text" name="image" defaultValue="" alt="profilePhoto"/>
                    <label name="level" >Level: </label>
                    <input type="text" name="level" defaultValue="Beginner"/>
    
                    <input type="submit" defaultValue="SUBMIT"/>
                </form>			
            </section>
    
        </main>

    );
}