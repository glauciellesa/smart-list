import { useEffect, useState } from "react";
import config from "../../config/config";
import axios from "axios";

const useRecipes = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${config.urlBase}${url}`);
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const refetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${config.urlBase}url`);
      setData(res.data());
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
  return { data, loading, error, refetchData };
};

export default useRecipes;
