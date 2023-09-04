import Category from "../models/CategoryModel.js";
/* import { NoContentError } from "../errors/NoContentError.js"; */
import Recipe from "../models/RecipesModel.js";
import { ObjectId } from "mongodb";

const createRecipeArray = async (userId) => {
  return await Recipe.create({
    user_id: userId,
    userRecipes: [],
  });
};

const recipeExist = async (recipeName) => {
  console.log({ recipeName });
  const query = await Recipe.findOne({
    userRecipes: { $elemMatch: { name: recipeName } },
  }).exec();
  console.log({ query });
  if (query) {
    return true;
  } else {
    return false;
  }
};

const createNewRecipe = async (recipeData, clientRequestId) => {
  return Recipe.findOneAndUpdate(
    { user_id: clientRequestId },
    {
      $push: {
        userRecipes: {
          photo: recipeData.photo,
          name: recipeData.name,
          timeToPrepare: recipeData.timeToPrepare,
          ingredients: recipeData.ingredients,
          instructions: recipeData.instructions,
        },
      },
    }
  );
};

const getRecipes = () => {
  const recipes = Recipe.find({});
  console.log(recipes);
  return recipes;
};

const getRecipeById = async (recipeId) => {
  return Recipe.find(
    { "userRecipes._id": recipeId },
    { userRecipes: { $elemMatch: { _id: recipeId } } }
  );
};

const editRecipe = async (clientId, recipeId, correctedRecipe) => {
  const newData = {
    photo: correctedRecipe.photo,
    name: correctedRecipe.name,
    timeToPrepare: correctedRecipe.timeToPrepare,
    ingredients: correctedRecipe.ingredients,
    instructions: correctedRecipe.instructions,
  };
  return Recipe.findOneAndUpdate(
    { user_id: clientId, "userRecipes._id": recipeId },
    { $set: { userRecipes: newData } }
  );
};

const deleteRecipe = async (clientRequestId, recipeId) => {
  return await ShoppingList.findOneAndUpdate(
    { user_id: clientRequestId, "userRecipes._id": recipeId },
    { $pull: { userRecipes: { _id: recipeId } } }
  );
};

export default {
  createRecipeArray,
  recipeExist,
  createNewRecipe,
  getRecipes,
  getRecipeById,
  editRecipe,
  deleteRecipe,
};
