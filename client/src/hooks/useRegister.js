import { useState } from "react";
import { useAuthContext } from "./useAuthContex";
import config from "../../config/config";
import axios from "axios";

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const register = async (newUser) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${config.urlBase}register`, newUser, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("respo", response);

      //Save user in local storage
      localStorage.setItem("user", JSON.stringify(response.data));
      //update the auth context
      dispatch({ type: "LOGIN", payload: response.data });
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
};
