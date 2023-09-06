import config from "src/config/config";
import { axiosInstance } from "src/hooks/tokenAuth";

const getShoppingLists = async (endpoint) => {
  return await axiosInstance.get(`${config.urlBase}${endpoint}`);
};

const getShoppingList = async (endpoint) => {
  return await axiosInstance.get(`${config.urlBase}${endpoint}`);
};

export default { getShoppingLists, getShoppingList };
