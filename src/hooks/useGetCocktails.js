import * as API from "../api/cocktail-service";
import { useState, useEffect } from "react";

const useGetCocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const getCocktails = async () => {
      setLoading(true);
      try {
        const response = await API.getTrendingCocktails();
        console.log(response);
        const normalizeResponse = response.map(
          (cocktails) => cocktails.drinks[0]
        );
        console.log(normalizeResponse);
        setCocktails(normalizeResponse);
        setSuccess(true);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getCocktails();
  }, []);
  return { cocktails, loading, success };
};

export default useGetCocktails;
