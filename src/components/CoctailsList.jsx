import React from "react";
import CocktailCard from "./CocktailCard";
const CoctailsList = ({ cocktails }) => {
  return (
    <ul>
      {cocktails &&
        cocktails.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} {...cocktail}></CocktailCard>
        ))}
    </ul>
  );
};

export default CoctailsList;
