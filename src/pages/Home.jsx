import CoctailsList from "../components/CoctailsList";
import Section from "../components/Section";
import useGetCocktails from "../hooks/useGetCocktails";

const Home = () => {
  const { cocktails, loading, success } = useGetCocktails();

  return (
    <>
      {/* Loader loading */}
      {success && (
        <Section>
          <h1>Popular coctails</h1>
          <CoctailsList cocktails={cocktails} />
        </Section>
      )}
    </>
  );
};

export default Home;
