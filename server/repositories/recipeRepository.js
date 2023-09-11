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
  const recipeWithUser = await Recipe.findOne(
    { "userRecipes._id": recipeId },
    { "userRecipes.$": 1, user_id: 1 }
  );

  if (!recipeWithUser) {
    return null;
  }

  return recipeWithUser;
};

const editRecipe = async (clientId, recipeId, newData) => {
  let updateFields = {};

  for (const key in newData) {
    if (newData.hasOwnProperty(key)) {
      updateFields[`userRecipes.$.${key}`] = newData[key];
    }
  }

  console.log(updateFields);

  return Recipe.findOneAndUpdate(
    { user_id: clientId, "userRecipes._id": recipeId },
    { $set: updateFields }
  );
};

const deleteRecipe = async (clientRequestId, recipeId) => {
  return await Recipe.findOneAndUpdate(
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
