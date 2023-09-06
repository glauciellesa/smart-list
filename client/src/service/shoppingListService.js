import config from "src/config/config";
import { axiosInstance } from "src/hooks/tokenAuth";

const getShoppingLists = async (endpoint) => {
  return await axiosInstance.get(`${config.urlBase}${endpoint}`);
};

const getShoppingList = async (endpoint) => {
  return await axiosInstance.get(`${config.urlBase}${endpoint}`);
};

const createShoppingLists = async (endpoint, newList) => {
  return await axiosInstance.post(
    `${config.urlBase}${endpoint}`,
    { listName: newList },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};
export default { getShoppingLists, getShoppingList, createShoppingLists };
