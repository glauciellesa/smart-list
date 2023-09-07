import { useState } from "react";
import shoppingListService from "../service/shoppingListService";

export const useAddNewList = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const addNewList = async (endpoint, newList) => {
    setIsLoading(true);
    setError(null);
    try {
      await shoppingListService.createShoppingLists(endpoint, newList);
    } catch (error) {
      setError(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return { addNewList, isLoading, error };
};
