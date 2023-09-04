import express from "express";
import recipeService from "../services/recipeService.js";
import recipeRepository from "../repositories/recipeRepository.js";

const recipe = express.Router();

recipe.post("/api/recipes", async (req, res, next) => {
  try {
    const clientRequestId = req.email._id;
    const createdRecipe = await recipeService.addNewRecipe(
      req.body,
      clientRequestId
    );
    res.status(201).json({ createdRecipe }).end();
  } catch (error) {
    return next(error);
  }
});

recipe.get("/api/recipes", async (req, res, next) => {
  try {
    const recipes = await recipeRepository.getRecipes();
    res.status(200).json(recipes).end();
  } catch (error) {
    return next(error);
  }
});

recipe.get("/api/recipes/:recipeId", async (req, res, next) => {
  try {
    const recipeId = req.params.recipeId;
    const recipes = await recipeRepository.getRecipeById(recipeId);
    res.status(200).json(recipes).end();
  } catch (error) {
    return next(error);
  }
});

recipe.put("/api/recipes/:recipeId", async (req, res, next) => {
  try {
    const clientRequestId = req.email._id;
    const editedRecipe = await recipeService.checkRecipeBeforeEdit(
      clientRequestId,
      req.body
    );
    res.status(200).json(editedRecipe).end();
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
