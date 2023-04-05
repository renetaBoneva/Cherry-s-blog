import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import { Navigation } from "./components/Header/Navigation";
import { HomeAndCatalogPage } from "./components/LandingPage/HomeAndCatalogPage";
import { Login } from "./components/User/Login";
import { Register } from "./components/User/Register";
import { AddRecipe } from "./components/Recipe/AddRecipe";
import { UserProfilePage } from "./components/User/Profile/UserProfilePage";
import { ErrorPage } from "./components/ErrorPage";
import { Footer } from "./components/Footer/Footer";
import { RecipeDelete } from "./components/Recipe/RecipeDelete";
import { RecipeDetails } from "./components/Recipe/Details/RecipeDetails";
import { RecipeEdit } from "./components/Recipe/RecipeEdit";
import { UserProfileEdit } from "./components/User/Profile/UserProfileEdit";
import { Logout } from "./components/User/Logout";
import { RecipesProvider } from "./contexts/RecipesContext";
import { InitialData } from "./components/InitialData";

function App() {

  return (
    <AuthProvider>
      <RecipesProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomeAndCatalogPage />}></Route>
            <Route path="/catalog" element={<HomeAndCatalogPage />}></Route>
            <Route path="/initialData" element={<InitialData />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/addRecipe" element={<AddRecipe />}></Route>

            <Route path="/users/:userId/profile" element={<UserProfilePage />}></Route>
            <Route path="/users/:userId/edit" element={<UserProfileEdit />}></Route>

            <Route path="/recipes/:recipeId/details" element={<RecipeDetails />}></Route>
            <Route path="/recipes/:recipeId/delete" element={<RecipeDelete />}></Route>
            <Route path="/recipes/:recipeId/edit" element={<RecipeEdit />}></Route>

            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
          <Footer />
      </RecipesProvider>
    </AuthProvider>
  );
}

export default App;
