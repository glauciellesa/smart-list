import config from "src/config/config";
import { axiosInstance } from "src/hooks/tokenAuth";

const getRecipes = async (url) => {
  return await axiosInstance.get(`${config.urlBase}${url}`);
};

const getRecipeById = async (url) => {
  return await axiosInstance.get(`${config.urlBase}${url}`);
};

export default { getRecipes, getRecipeById };
