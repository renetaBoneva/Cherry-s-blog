
import { Link } from "react-router-dom";
import { useService } from "../../hooks/useService";
import { recipesServiceFactory } from "../../services/recipesService";
import { useEffect, useState } from "react";


export function Home() {
    const [cherryCake, setCherryCake] = useState({});
    const recipesService = useService(recipesServiceFactory);

    useEffect(() => {
        recipesService.getCherryCake()
            .then(res => setCherryCake(res))
            .catch((err) => console.log(err.message))
    }, [])

    return (
        <section id="homeSection">

            <div className="wrapper">
                <div id="first">
                    <h1>Cherry's blog</h1>
                    <div id="br"></div>
                    <button><Link to={`/recipes/${cherryCake[0]?._id}/details`}>THE BEST CHERRY CAKE</Link></button>
                </div>
                <div id="second">
                    <img src="/img/homeImg.jpg" alt="cherryCake" />
                </div>

            </div>
        </section>
    )
}