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

  const addUserData = (newUser) => {
    console.log("app", newUser);
  };
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
