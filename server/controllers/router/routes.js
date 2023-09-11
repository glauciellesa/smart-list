import express from "express";
import user from "../userController.js";
import product from "../productController.js";
import recipe from "../recipeController.js";
import category from "../categoryController.js";
import shoppingList from "../shoppingListController.js";
import shoppingListProduct from "../shoppingListProductController.js";

const routes = express.Router();

routes.get("/", async function (req, res) {
  res.send(`Reached home!`);
});

routes.use(recipe);
routes.use(user);
routes.use(category);
routes.use(product);
routes.use(shoppingList);
routes.use(shoppingListProduct);

export default routes;
