const CoctailCardItem = ({
  strDrink,
  strDrinkThumb,
  strGlass,
  strAlcoholic,
  strCategory,
  strInstructions,
}) => {
  return (
    <>
      <div>
        <div>
          <img src={strDrinkThumb} alt={strDrink} />
        </div>
        <div>
          <h2>{strDrink}</h2>
          <p>{strInstructions}</p>
          <p>{strGlass}</p>
          <p>{strAlcoholic}</p>
          <p>{strCategory}</p>
        </div>
      </div>
    </>
  );
};

export default CoctailCardItem;
