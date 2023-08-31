import config from "../config/config.js";

const getProducts = () => {
  return fetch(`${config.urlBase}/products`)
    .then((response) => {
      if (!response.ok) {
        console.log(response);
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err.message);
      return [];
    });
};

export default { getProducts };
