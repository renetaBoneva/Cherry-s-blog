import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Navigation } from "./components/Header/Navigation";
import { HomeAndCatalogPage } from "./components/LandingPage/HomeAndCatalogPage";
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

function App() {
  const [recipesData, setRecipesData ] = useState()
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
