import config from "src/config/config";
import { axiosInstance } from "src/hooks/tokenAuth";

const createNewProduct = async (endpoint, newProduct) => {
  return await axiosInstance.post(
    `${config.urlBase}${endpoint}`,
    { ...newProduct },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};

const getProducts = async (endpoint) => {
  console.log({ endpoint });
  return await axiosInstance.get(`${config.urlBase}${endpoint}`);
};

const getProductByName = async (endpoint) => {
  return await axiosInstance.get(`${config.urlBase}${endpoint}`);
};

export default { createNewProduct, getProducts, getProductByName };
