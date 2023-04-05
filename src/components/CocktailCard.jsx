import React from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../routes";
const CocktailCard = ({ idDrink, strDrink, strDrinkThumb, strGlass }) => {
  const location = useLocation();
  const currentPage =
    location.pathname === routes.HOME ? routes.COCKTAILS : location.pathname;
  console.log(currentPage);
  return (
    <li>
      <Link to={`${currentPage}/${idDrink}`} state={{ from: location }}>
        <img src={strDrinkThumb} alt={strDrink} />
        <h2>{strDrink}</h2>
        <span>{strGlass}</span>
      </Link>
    </li>
  );
};

export default CocktailCard;
