import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { routes } from "../routes";
import Home from "../pages/Home";

import CoctailsDetail from "../pages/CocktailDetails";

const App = () => {
  return (
    // <Routes>
    //   <Route path={routes.HOME} element={<Home />} />
    //   {/* <Route path={routes.COCKTAILS} element={<Coctails />} /> */}
    //   <Route path="/:cocktailID" element={<CoctailsDetail />} />
    //   {/* <Route
    //     path="*"
    //     element={<Navigate to={routes.HOME} replace></Navigate>}
    //   /> */}
    // </Routes>

    <Routes>
      <Route index path={routes.HOME} element={<Home />} />
      <Route path={routes.COCKTAILS} element={<div> cocktails </div>} />
      <Route path={routes.COCKTAIL_ID} element={<CoctailsDetail />} />
    </Routes>
  );
};

export default App;
