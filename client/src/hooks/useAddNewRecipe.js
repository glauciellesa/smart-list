import { useState } from "react";
import recipeService from "../service/recipeService";

export const useAddNewRecipe = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const addNewRecipe = async (endpoint, newRecipe) => {
    setIsLoading(true);
    setError(null);
    try {
      await recipeService.createNewRecipes(endpoint, newRecipe);
    } catch (error) {
      setError(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return { addNewRecipe, isLoading, error };
};
