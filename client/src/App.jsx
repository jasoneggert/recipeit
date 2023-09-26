import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./views/home";
import Recipes from "./views/recipes";
import { AppBar } from "@mui/material";
import CreateRecipeView from "./views/CreateRecipeView";
function App() {
  return (
    <>
      <AppBar />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/recipes" exact element={<Recipes />} />
          <Route path="/create-recipe" exact element={<CreateRecipeView />} />
        </Routes>
        <Outlet />
      </Router>
    </>
  );
}

export default App;
