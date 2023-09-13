import { useState } from "react";
import productShoppingList from "../service/productShoppingList";

export const useAddProductIntoList = () => {
  const [isAdded, setIsAdded] = useState(null);

  const addNewProductIntoList = async (endpoint, newRecipe, userId) => {
    setIsAdded(null);
    try {
      await productShoppingList.addProductIntoList(endpoint, newRecipe, userId);
    } catch (error) {
      setIsAdded(error.response.data.error);
    }
  };

  return { addNewProductIntoList, isAdded };
};

export const useDeleteProductFromList = () => {
  const deleteProductFromList = async (endpoint, newRecipe, userId) => {
    setIsDeleted(null);
    try {
      await productShoppingList.addProductIntoList(endpoint, newRecipe, userId);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return { deleteProductFromList };
};
