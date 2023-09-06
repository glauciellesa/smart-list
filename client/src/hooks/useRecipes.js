import { useEffect, useState } from "react";
import recipeService from "../service/recipeService";

const useRecipes = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await recipeService.getRecipes(url);
        setData(res.data);
      } catch (error) {
        console.log(error);
        if (error.response.status === 403) {
          setError(error.response.data);
        } else {
          setError(error.response.data.error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useRecipes;
