import config from "src/config/config";
import { axiosInstance } from "src/hooks/tokenAuth";

const getProductFromLists = async (endpoint) => {
  console.log({ endpoint });
  return await axiosInstance.get(`${config.urlBase}${endpoint}`);
};

export default { getProductFromLists };
