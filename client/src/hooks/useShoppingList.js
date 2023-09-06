import { useEffect, useState } from "react";
import config from "../../config/config";
import axios from "axios";

const useShoppingList = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getShoppingLists = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${config.urlBase}${url}`);
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    getShoppingLists();
  }, [url]);

  return { data, loading, error };
};

export default useShoppingList;
