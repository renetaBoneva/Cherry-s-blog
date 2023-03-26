import { useState } from "react";

export function UserProfileEdit() {
    const [formData, setFormData] = useState({
        username: "Reneta Boneva",
        email: "reneta.boneva@abv.bg",
        password: "",
        rePass: "",
        location: "Burgas, Bulgaria",
        imageUrl: "",
        level: "Beginner"
    });
    document.body.style.backgroundImage = `url('/img/yellowGreenBgr.png')`;

    console.log("//TODO get user details");

    function onChange(e){
        setFormData(state => ({...state, [e.target.name]: e.target.value}))
    }

    function onEditProfileSubmit(e) {
        e.preventDefault();
        console.log(formData);
        console.log("//TODO Send patch request to the server");
        console.log("//TODO Set new users's data");
    }
    
    return (
        <main style={{
            display: "flex",
            justifyContent: "center"
        }}>
            
            <section id="editSection" className="wrapper">
                <form onSubmit={onEditProfileSubmit}>
                    <h2>Edit profile</h2>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" value={formData.username} onChange={onChange} />
                    <label htmlFor="email">E-mail: </label>
                    <input type="text" name="email" value={formData.email} onChange={onChange} />
                    <label htmlFor="password">Old password: </label>
                    <input type="password" name="password"  value={formData.password} onChange={onChange} />
                    <label htmlFor="rePass">New password: </label>
                    <input type="password" name="rePass"  value={formData.rePass} onChange={onChange} />
                    <label htmlFor="location">Location: </label>
                    <input type="text" name="location" value={formData.location} onChange={onChange} />
                    <label htmlFor="imageUrl">Image: </label>
                    <input type="text" name="imageUrl"  value={formData.imageUrl} onChange={onChange} alt="profilePhoto"/>
                    <label htmlFor="level" >Level: </label>
                    <input type="text" name="level" value={formData.level} onChange={onChange} />
    
                    <input type="submit" value="SUBMIT"/>
                </form>			
            </section>
    
        </main>

    );
}