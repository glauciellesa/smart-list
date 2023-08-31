const insertUser = (baseUrl, newUser) => {
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
};

export default { insertUser };
