import Section from "../components/Section";
import useCoctailsDetails from "../hooks/useCoctailDetails";
import { routes } from "../routes";
import CocktailCardItem from "../components/CocktailCardItem";
import { Link } from "react-router-dom";

const CoctailsDetail = () => {
  const { coctail, loading, success } = useCoctailsDetails();

  // if (!success) return;

  return (
    <Section>
      Cocktail
      <Link to={routes.HOME}>Back</Link>
      <CocktailCardItem {...coctail} />
      test
    </Section>
  );
};

export default CoctailsDetail;
