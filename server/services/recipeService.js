import { InvalidInputError } from "../errors/invalidInputError.js";
import recipeRepository from "../repositories/recipeRepository.js";

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

const checkRecipeBeforeEdit = async (client) => {};
const checkRecipeBeforeDelete = async () => {};

export default { addNewRecipe, checkRecipeBeforeEdit, checkRecipeBeforeDelete };
