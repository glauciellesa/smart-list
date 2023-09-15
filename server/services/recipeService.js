import { InvalidInputError } from "../errors/invalidInputError.js";
import { PermissionError } from "../errors/permissionError.js";
import recipeRepository from "../repositories/recipeRepository.js";
import userRepository from "../repositories/userRepository.js";

const addNewRecipe = async (newRecipe, clientRequestId) => {
  if (!newRecipe.name || !newRecipe.ingredients.length) {
    throw new InvalidInputError(
      "You need to provide the recipe name and ingredients."
    );
  }

  const recipeDuplicate = await recipeRepository.recipeExist(newRecipe.name);

  if (recipeDuplicate) {
    throw new InvalidInputError("Recipe already exists in recipe list.");
  }

  const newRecipeData = {
    photo: newRecipe.photo,
    name: newRecipe.name,
    timeToPrepare: newRecipe.timeToPrepare,
    timeToPrepare: newRecipe.timeToPrepare,
    ingredients: newRecipe.ingredients,
    instructions: newRecipe.instructions,
  };

  const recipeCreated = await recipeRepository.createNewRecipe(
    newRecipeData,
    clientRequestId
  );
  return recipeCreated;
};

const checkRecipeBeforeEdit = async (
  clientRequestId,
  recipeId,
  newRecipeData
) => {
  const userRecipe = await recipeRepository.editRecipe(
    clientRequestId,
    recipeId,
    newRecipeData
  );

  if (userRecipe) {
    return "Recipe was edited";
  } else {
    throw new PermissionError("You are not owner of this recipe");
  }
};

const checkRecipeBeforeDelete = async (clientRequestId, recipeId) => {
  const userList = await recipeRepository.deleteRecipe(
    clientRequestId,
    recipeId
  );

  if (userList) {
    return "Recipe was deleted";
  } else {
    throw new PermissionError("You are not owner of this recipe");
  }
};

const getRecipeData = async (recipeId) => {
  const recipe = await recipeRepository.getRecipeById(recipeId);
  const user = await userRepository.getUserById(recipe.user_id);

  const recipeData = {
    userName: `${user.first_name} ${user.last_name}`,
    githubAccount: user.githubAccount,
    photo: recipe.userRecipes[0].photo,
    name: recipe.userRecipes[0].name,
    timeToPrepare: recipe.userRecipes[0].timeToPrepare,
    ingredients: recipe.userRecipes[0].ingredients,
    instructions: recipe.userRecipes[0].instructions,
  };

  return recipeData;
};

export default {
  addNewRecipe,
  checkRecipeBeforeEdit,
  checkRecipeBeforeDelete,
  getRecipeData,
};
