import { useState } from "react";
import productsService from "../service/productsService";

export const useAddNewProduct = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const addNewProduct = async (endpoint, newRecipe) => {
    setIsLoading(true);
    setError(null);
    try {
      await productsService.createNewProduct(endpoint, newRecipe);
    } catch (error) {
      setError(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return { addNewProduct, isLoading, error };
};
