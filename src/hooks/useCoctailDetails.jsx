import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as API from "../api/cocktail-service";
import { routes } from "../routes";

const useCoctailsDetails = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [coctail, setCoctail] = useState({});
  const { cocktailID } = useParams();

  console.log(cocktailID);

  useEffect(() => {
    const coctailDetail = async () => {
      try {
        const res = await API.getCocktailDetail(cocktailID);
        console.log(res);
        setCoctail(res);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    coctailDetail();
  }, []);

  return { coctail, loading, success };
};

export default useCoctailsDetails;
