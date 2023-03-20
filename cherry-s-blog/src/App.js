import { Routes, Route } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { HomeAndCatalogPage } from "./components/HomeAndCatalogPage";
import { LoginPage } from "./components/Login";
import { RegisterPage } from "./components/RegisterPage";
import { AddRecipePage } from "./components/AddRecipePage";
import { UserProfilePage } from "./components/UserProfilePage";
import { ErrorPage } from "./components/ErrorPage";
import { Footer } from "./components/Footer";
import { RecipeDetails } from "./components/RecipeDetails";
import { RecipeDelete } from "./components/RecipeDelete";
import { RecipeEdit } from "./components/RecipeEdit";
import { UserProfileEdit } from "./components/UserProfileEdit";

// document.body.style.backgroundImage = `url('/img/pinkGreenBgr.png')`;

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeAndCatalogPage />}></Route>
        <Route path="/catalog" element={<HomeAndCatalogPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/addRecipe" element={<AddRecipePage />}></Route>

        <Route path="/users/:id/profile" element={<UserProfilePage />}></Route>
        <Route path="/users/:id/edit" element={<UserProfileEdit />}></Route>

        {console.log("//TODO add id")}
        <Route path="/recipes/:id/details" element={<RecipeDetails />}></Route>
        <Route path="/recipes/:id/delete" element={<RecipeDelete />}></Route>
        <Route path="/recipes/:id/edit" element={<RecipeEdit/>}></Route>

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
