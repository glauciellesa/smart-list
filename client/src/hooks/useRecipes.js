import { useEffect, useState } from "react";
import recipeService from "../service/recipeService";

const useRecipes = (key, url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let res;
        switch (key) {
          case "getRecipes":
            res = await recipeService.getRecipes(url);
            break;

          case "getRecipeById":
            res = await recipeService.getRecipeById(url);
            break;

          case "deleteRecipe":
            res = await recipeService.deleteRecipe(url);
            break;

          default:
            break;
        }
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
  }, [url, history.length]);

  return { data, loading, error };
};

export default useRecipes;
