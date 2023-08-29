import express from "express";
import recipeService from "../services/recipeService.js";

const recipe = express.Router();

recipe.post("/api/recipes", async (req, res, next) => {
  try {
    const clienteRequestId = req.email._id;

    const createdRecipe = recipeService.addNewRecipe(
      req.body,
      clienteRequestId
    );
    res.status(201).json({ createdRecipe }).end();
  } catch (error) {
    return next(error);
  }
});
recipe.get("/api/recipes", async (req, res, next) => {
  try {
  } catch (error) {
    return next(error);
  }
});
recipe.get("/api/recipes/:recipeId", async (req, res, next) => {
  try {
  } catch (error) {
    return next(error);
  }
});

//I think just the person that has created the recipe are able to delete it.
recipe.delete("/api/recipes/:recipeId", async (req, res, next) => {
  try {
  } catch (error) {
    return next(error);
  }
});

export default recipe;
