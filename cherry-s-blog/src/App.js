import { CatalogFunction } from "./components/CatalogSection";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";


function App() {
  return (
    <>	
      <Navigation />
      <main>
        <section id="homeSection">

          <div className="wrapper">
            <div id="first">
              <h1>Cherry's blog</h1>
              <div id="br"></div>
              <button><a href="./details.html">THE BEST CHERRY CAKE</a></button>
            </div>
            <div id="second">
              <img src="img/homeImg.jpg" alt="cherryCake"/>
            </div>

          </div>
        </section>

        <CatalogFunction />
      </main>
      <Footer />
    </>
  );
}

export default App;
