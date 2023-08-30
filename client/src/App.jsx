import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/PageNotFound";
import Recipes from "./components/Recipes";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Register from "./pages/register/Register";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);
  const baseUrl = "http://localhost:8000";

  const addUserData = (newUser) => {
    setUserData(newUser);
  };

  if (userData) {
    addNewUser(userData, baseUrl);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route
          path="register"
          element={<Register onRegister={addUserData} />}
        />
        <Route path="login" element={<Login />} />
        <Route path="list" element={<List />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

const addNewUser = (newUser, baseUrl) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  };

  fetch(`${baseUrl}/api/register`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status} ${Error.message}`
        );
      }
      return response.json();
    })
    .then((newUser) => console.log("New user:", newUser))
    .catch((err) => {
      console.log(err.message);
    });
};
