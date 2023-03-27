import { Link } from "react-router-dom";

export function CatalogSection(){
    return (
        <section id="catalogSection">

          <div className="wrapper">
            <h2>Catalog</h2>
            <div id="recipesWrapper">

              <div className="recipe">
                <img src="./img/bananaPancakes.jpg" alt="bananaPancakes"/>
                  <h3> <Link to={"/recipes/"}>Banana pancakes</Link></h3>
              </div>
              <div className="recipe">
                <img src="./img/cherryCake.jpg" alt="cherryCake"/>
                  <h3><Link to={"/recipes/"}>Cherry cake</Link></h3>
              </div>
              <div className="recipe">
                <img src="./img/cherryPie.jpg" alt="cherryPie"/>
                  <h3><Link to={"/recipes/"}>Cherry pie</Link></h3>
              </div>
              <div className="recipe">
                <img src="./img/cherryCheesecake.jpg" alt="cherryCheesecake"/>
                  <h3><Link to={"/recipes/"}>Cherry cheesecake</Link></h3>
              </div>
              <div className="recipe">
                <img src="./img/chocCherry.jpg" alt="chocCherry"/>
                  <h3><Link to={"/recipes/"}>Chocolate cherry cheesecake</Link></h3>
              </div>
              <div className="recipe">
                <img src="./img/cherryMuffins.jpg" alt="cherryMuffins"/>
                  <h3><Link to={"/recipes/"}>Cherry muffins</Link></h3>
              </div>

            </div>
          </div>

        </section>
    );
}