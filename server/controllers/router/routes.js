import express from "express";
import user from "../userController.js";
import product from "../productController.js";
import recipe from "../recipeController.js";

const routes = express.Router();

routes.get("/", async function (req, res) {
  res.send(`Reached home!`);
});

routes.use(user);
routes.use(product);
routes.use(recipe);

export default routes;
