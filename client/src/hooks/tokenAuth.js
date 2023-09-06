import config from "src/config/config";
import axios from "axios";

const baseURL = config;

export const getToken = () => {
  const user = localStorage.getItem("user");

  if (user) {
    let json = JSON.parse(user);

    return json.token;
  } else {
    return null;
  }
};

export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: getAuthorizationHeader() },
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getAuthorizationHeader();

  //checking if accessToken exists
  if (accessToken) {
    config.headers["Authorization"] = accessToken;
  }

  return config;
});

export { axiosInstance };
