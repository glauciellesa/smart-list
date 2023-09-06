import config from "../../config/config";
import axios from "axios";

const baseURL = config;

export const getToken = () => {
  const user = localStorage.getItem("user");
  console.log({ user });
  if (user) {
    let json = JSON.parse(user);

    return json.token;
  } else {
    return null;
  }
};

export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

export const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: getAuthorizationHeader() },
});
