import express from "express";
import recipeService from "../services/recipeService.js";
import recipeRepository from "../repositories/recipeRepository.js";
import { verifyToken } from "../services/authService.js";

const recipe = express.Router();

recipe.post("/api/recipes", verifyToken, async (req, res, next) => {
  try {
    const clientRequestId = req.email._id;
    if (!clientRequestId) {
      throw Error(" You are not logged in");
    }

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
    const recipes = await recipeService.getRecipeData(recipeId);
    res.status(200).json(recipes).end();
  } catch (error) {
    return next(error);
  }
});

recipe.put("/api/recipes/:recipeId", async (req, res, next) => {
  try {
    const clientRequestId = req.email._id;
    const recipeId = req.params.recipeId;
    const editedRecipe = await recipeService.checkRecipeBeforeEdit(
      clientRequestId,
      recipeId,
      req.body
    );
    res.status(200).json(editedRecipe).end();
  } catch (error) {
    return next(error);
  }
});

recipe.delete("/api/recipes/:recipeId", async (req, res, next) => {
  try {
    const clientRequestId = req.email._id;
    const recipeId = req.params.recipeId;
    const checkToDelet = await recipeService.checkRecipeBeforeDelete(
      clientRequestId,
      recipeId
    );

    res.status(200).json(checkToDelet).end();
  } catch (error) {
    return next(error);
  }
});

export default recipe;
