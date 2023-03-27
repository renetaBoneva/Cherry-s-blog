import { CatalogSection } from "../Catalog/CatalogSection";
import { Link } from "react-router-dom";

export function HomeAndCatalogPage() {
    document.body.style.backgroundImage = `none`;
    document.body.style.backgroundColor= '#C6CACB';

    return (
        <main>
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

            <CatalogSection />
        </main>
    );
}