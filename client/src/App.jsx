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
import ShoppingList from "./pages/shoppingList/ShoppingList";
import Register from "./pages/register/Register";
import productService from "../service/productService";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route
          path="shoppingList"
          element={<ShoppingList />}
          /*  loader={() => {
            return productService.getProducts();
          }} */
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
