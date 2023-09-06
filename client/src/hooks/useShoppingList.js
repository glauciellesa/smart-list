import { useEffect, useState } from "react";
import shoppingListService from "../service/shoppingListService";

const useShoppingList = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getShoppingLists = async () => {
      setIsLoading(true);
      try {
        const res = await shoppingListService.getShoppingLists(url);
        setData(res.data);
      } catch (error) {
        if (error.response.status === 403) {
          setError(error.response.data);
        } else {
          setError(error.response.data.error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getShoppingLists();
  }, [url]);

  return { data, isLoading, error };
};

export default useShoppingList;
