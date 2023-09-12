import config from "src/config/config";
import { axiosInstance } from "src/hooks/tokenAuth";

const createNewRecipes = async (endpoint, newRecipe, userId) => {
  return await axiosInstance.post(
    `${config.urlBase}${endpoint}`,
    { ...newRecipe },
    {
      headers: { "Content-Type": "application/json", "X-User-ID": userId },
    }
  );
};

const getRecipes = async (endpoint) => {
  return await axiosInstance.get(`${config.urlBase}${endpoint}`);
};

const getRecipeById = async (endpoint) => {
  return await axiosInstance.get(`${config.urlBase}${endpoint}`);
};

const deleteRecipe = async (endpoint) => {
  return await axiosInstance.delete(`${config.urlBase}${endpoint}`);
};

export default { createNewRecipes, getRecipes, getRecipeById, deleteRecipe };
