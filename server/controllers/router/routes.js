import express from "express";
import user from "../userController.js";
import item from "../itemController.js";
import recipe from "../recipeController.js";

const routes = express.Router();

routes.get("/", async function (req, res) {
  res.send(`Reached home!`);
});

routes.use("/", user);
routes.use("/", item);
routes.use("/", recipe);

export default routes;
