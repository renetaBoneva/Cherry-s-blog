export function CatalogFunction(){
    return (
        <section id="catalogSection">

          <div className="wrapper">
            <h2>Catalog</h2>
            <div id="recipesWrapper">

              <div className="recipe">
                <img src="./img/bananaPancakes.jpg" alt="bananaPancakes"/>
                  <h3> <a href="/recipes/">Banana pancakes</a></h3>
              </div>
              <div className="recipe">
                <img src="./img/cherryCake.jpg" alt="cherryCake"/>
                  <h3><a href="/recipes/">Cherry cake</a></h3>
              </div>
              <div className="recipe">
                <img src="./img/cherryPie.jpg" alt="cherryPie"/>
                  <h3><a href="/recipes/">Cherry pie</a></h3>
              </div>
              <div className="recipe">
                <img src="./img/cherryCheesecake.jpg" alt="cherryCheesecake"/>
                  <h3><a href="/recipes/">Cherry cheesecake</a></h3>
              </div>
              <div className="recipe">
                <img src="./img/chocCherry.jpg" alt="chocCherry"/>
                  <h3><a href="/recipes/">Chocolate cherry cheesecake</a></h3>
              </div>
              <div className="recipe">
                <img src="./img/cherryMuffins.jpg" alt="cherryMuffins"/>
                  <h3><a href="/recipes/">Cherry muffins</a></h3>
              </div>

            </div>
          </div>

        </section>
    );
}