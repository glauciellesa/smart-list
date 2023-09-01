import express from "express";
import user from "../userController.js";
import product from "../productController.js";
import recipe from "../recipeController.js";
import category from "../categoryController.js";
import shoppingList from "../shoppingListController.js";
import shoppingListProduct from "../ShoppingListProductController.js";

const routes = express.Router();

routes.get("/", async function (req, res) {
  res.send(`Reached home!`);
});

routes.use(user);
routes.use(category);
routes.use(product);
routes.use(shoppingList);
routes.use(shoppingListProduct);
routes.use(recipe);

export default routes;
