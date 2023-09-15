import config from "src/config/config";
import { axiosInstance } from "src/hooks/tokenAuth";

const addProductIntoList = async (endpoint, newProduct, userId) => {
  return await axiosInstance.post(
    `${config.urlBase}${endpoint}`,
    //    { ...newProduct },
    newProduct,
    {
      headers: { "Content-Type": "application/json", "X-User-ID": userId },
    }
  );
};

const getProductFromLists = async (endpoint) => {
  return await axiosInstance.get(`${config.urlBase}${endpoint}`);
};

const deleteProductFromLists = async (endpoint, userId) => {
  return await axiosInstance.delete(`${config.urlBase}${endpoint}`, {
    headers: { "Content-Type": "application/json" },
  });
};

export default {
  getProductFromLists,
  addProductIntoList,
  deleteProductFromLists,
};
