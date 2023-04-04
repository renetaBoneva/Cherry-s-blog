
import { Link } from "react-router-dom";


export function Home() {
    return (
        <section id="homeSection">

            <div className="wrapper">
                <div id="first">
                    <h1>Cherry's blog</h1>
                    <div id="br"></div>
                    <button><Link to={"/recipes/id/details"}>THE BEST CHERRY CAKE</Link></button>
                </div>
                <div id="second">
                    <img src="/img/homeImg.jpg" alt="cherryCake" />
                </div>

            </div>
        </section>
    )
}