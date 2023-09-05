/* import config from "../config/config";

export const getRecipes = async () => {
  try {
    return fetch(`${config.urlBase}/recipes`).then((response) => {
      if (!response.ok) {
        console.log(response);
      }
      return response.json();
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};
 */
