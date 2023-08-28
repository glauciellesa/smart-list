import express from "express";
import { verifyToken } from "../services/authService.js";

const recipe = express.Router();

recipe.use(verifyToken);
/**
 * @swagger
 * /api/recipe:
 *   post:
 *     summary: Creates a user
 *     description: insert a new user to the db.
 */

recipe.post("/api/recipes/newRecipe", async (req, resp, next) => {
  try {
  } catch (error) {
    return next(error);
  }
});
recipe.get("/api/recipes", async (req, resp, next) => {
  try {
  } catch (error) {
    return next(error);
  }
});
recipe.get("/api/recipes/:recipeId", async (req, resp, next) => {
  try {
  } catch (error) {
    return next(error);
  }
});

//I think just the person that has created the recipe are able to delete it.
recipe.delete("/api/recipes/:recipeId", async (req, resp, next) => {
  try {
  } catch (error) {
    return next(error);
  }
});

export default recipe;
