import { CatalogSection } from "./CatalogSection";

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
                        <button><a href="./details.html">THE BEST CHERRY CAKE</a></button>
                    </div>
                    <div id="second">
                        <img src="img/homeImg.jpg" alt="cherryCake" />
                    </div>

                </div>
            </section>

            <CatalogSection />
        </main>
    );
}