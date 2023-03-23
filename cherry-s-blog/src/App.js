import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Navigation } from "./components/Header/Navigation";
import { HomeAndCatalogPage } from "./components/HomeAndCatalogPage";
import { LoginPage } from "./components/User/Login";
import { RegisterPage } from "./components/User/RegisterPage";
import { AddRecipePage } from "./components/Recipe/AddRecipePage";
import { UserProfilePage } from "./components/User/UserProfilePage";
import { ErrorPage } from "./components/ErrorPage";
import { Footer } from "./components/Footer/Footer";
import { RecipeDetails } from "./components/Recipe/RecipeDetails";
import { RecipeDelete } from "./components/Recipe/RecipeDelete";
import { RecipeEdit } from "./components/Recipe/RecipeEdit";
import { UserProfileEdit } from "./components/User/UserProfileEdit";

// document.body.style.backgroundImage = `url('/img/pinkGreenBgr.png')`;

function App() {
  const [recipesData, setRecipesData ] = useState([{
    _id: '1',
    title: "Cherry cake",
    img: "/img/cherryCake.jpg",
    ingredients: "200g soft unsalted butter, plus extra for the tin\n200g golden caster sugar\n4 eggs\n2 tsp vanilla extract\n1 tsp almond extract (optional)\n75g glacé cherries, patted dry if in syrup, then quartered\n175g self-raising flour\n50g ground almonds\n½ tsp baking powder\n",
    method: "STEP 1\nHeat the oven to 180C/160C fan/gas 4. Butter a 900g loaf tin and line with baking parchment. Beat the butter and sugar together until pale and fluffy, then beat in the eggs one at a time, followed by the vanilla and almond extract (if using).\nSTEP 2\nToss the cherries with 2 tbsp of the flour in a bowl. Tip the rest of the flour, the ground almonds, baking powder and a pinch of salt into the bowl with the sugar and eggs, and mix until just combined. Fold in the cherries and any remaining flour in the bowl. Spoon into the prepared tin and smooth over the top.\nSTEP 3\nBake for 50-55 mins, or until a skewer inserted in the middle comes out clean. Leave to cool for 10 mins in the tin, then transfer to a wire rack to cool completely. Serve as it is, or mix the icing sugar with the extract and enough milk to make a thick but pourable consistency. Drizzle over the loaf cake, and scatter over the flaked almonds to serve.\n",
    comments: [{
        name: "Lili Semizova",
        value: "That’s my favorite cake to cook! "
    }]
  }])
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeAndCatalogPage />}></Route>
        <Route path="/catalog" element={<HomeAndCatalogPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/addRecipe" element={<AddRecipePage />}></Route>

        <Route path="/users/:id/profile" element={<UserProfilePage />}></Route>
        <Route path="/users/:id/edit" element={<UserProfileEdit />}></Route>

        {console.log("//TODO add id")}
        <Route path="/recipes/:id/details" element={<RecipeDetails />}></Route>
        <Route path="/recipes/:id/delete" element={<RecipeDelete />}></Route>
        <Route path="/recipes/:id/edit" element={<RecipeEdit />}></Route>

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
