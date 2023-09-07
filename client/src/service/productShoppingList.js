import config from "src/config/config";
import { axiosInstance } from "src/hooks/tokenAuth";

const getProductFromLists = async (endpoint) => {
  return await axiosInstance.get(`${config.urlBase}${endpoint}`);
};

export default { getProductFromLists };
