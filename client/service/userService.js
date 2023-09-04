/* const insertUser = (baseUrl, newUser) => {
  console.log(newUser);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  };

  fetch(baseUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        console.log(response);
      }
      return response.json();
    })
    .then((newUser) => console.log("New user:", newUser))
    .catch((err) => {
      console.log(err.message);
    });
}; */

import axios from "axios";

const createUser = async (baseUrl, newUser) => {
  try {
    const response = await axios.post(baseUrl, newUser, {
      headers: { "Content-Type": "application/json" },
    });

    if (!response.data) {
      return;
    }
  } catch (error) {
    console.error(error.message);
  }
};
export default { createUser };
