import express from "express";
import user from "../userController";
import item from "../itemController";
import recipe from "../recipeController";

const routes = express.Router();

routes.get("/", async function (req, res) {
  res.send(`Reached home!`);
});
routes.use("/", user);
routes.use("/", item);
routes.use("/", recipe);

export default routes;
