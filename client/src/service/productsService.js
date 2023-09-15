import config from "src/config/config";
import { axiosInstance } from "src/hooks/tokenAuth";

const createNewProduct = async (endpoint, newProduct, userId) => {
  return await axiosInstance.post(
    `${config.urlBase}${endpoint}`,
    { ...newProduct },
    {
      headers: { "Content-Type": "application/json", "X-User-ID": userId },
    }
  );
};

const getProducts = async (endpoint) => {
  return await axiosInstance.get(`${config.urlBase}${endpoint}`);
};

const getProductByName = async (endpoint) => {
  return await axiosInstance.get(`${config.urlBase}${endpoint}`);
};

export default { createNewProduct, getProducts, getProductByName };
