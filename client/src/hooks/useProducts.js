import { useEffect, useState } from "react";
import productsService from "../service/productsService";

const useProducts = (url, key, newProduct) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        let res;
        switch (key) {
          case "createNewProduct":
            res = await productsService.createNewProduct(url, newProduct);
            break;

          case "getProducts":
            res = await productsService.getProducts(url);
            break;

          case "getProductByName":
            res = await productsService.getProductByName(url);
            break;

          default:
            break;
        }
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
    getProducts();
  }, [url]);

  return { data, isLoading, error };
};

export default useProducts;
