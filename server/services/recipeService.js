import { InvalidInputError } from "../errors/invalidInputError.js";
import recipeRepository from "../repositories/recipeRepository.js";

const addNewRecipe = async (newRecipe, clienteRequestId) => {
  if (!newRecipe.name || !newRecipe.ingredients.length) {
    throw new InvalidInputError(
      "You need to provide the recipe name and ingredients."
    );
  }

  const recipeDuplicate = await recipeRepository.recipeExist(newRecipe.name);

  if (recipeDuplicate) {
    throw new InvalidInputError("Category already exists in categories list.");
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
    clienteRequestId
  );
  return recipeCreated;
};

export default { addNewRecipe };
