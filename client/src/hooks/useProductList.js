import { useEffect, useState } from "react";
import productShoppingList from "../service/productShoppingList";

const useProductsList = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProductsFromLists = async () => {
      setIsLoading(true);
      try {
        const res = await productShoppingList.getProductFromLists(url);
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
    getProductsFromLists();
  }, [url]);

  return { data, isLoading, error };
};

export default useProductsList;
