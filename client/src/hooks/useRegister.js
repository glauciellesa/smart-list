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
    console.log({ newUser });
    const response = await axios.post(`${config.urlBase}register`, newUser, {
      headers: { "Content-Type": "application/json" },
    });

    if (!response.data) {
      setIsLoading(false);
      setError(response.error);
    }
    if (response.ok) {
      //Save user in local storage
      localStorage.setItem("user", JSON.stringify(response));
      //update the auth context
      dispatch({ type: "LOGIN", payload: response });

      setIsLoading(false);
    }
  };
  return { register, isLoading, error };
};
