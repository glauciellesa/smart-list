import Category from "../models/CategoryModel.js";
/* import { NoContentError } from "../errors/NoContentError.js"; */
import Recipe from "../models/RecipesModel.js";
import { ObjectId } from "mongodb";

const recipeExist = async (recipeName) => {
  const query = await Category.findOne({ name: recipeName }).exec();
  if (query) {
    return true;
  } else {
    return false;
  }
};

const createNewRecipe = async (recipeData, clienteRequestId) => {
  return Recipe.create({
    user_id: new ObjectId(clienteRequestId),
    userRecipes: [
      {
        photo: recipeData.photo,
        name: recipeData.name,
        timeToPrepare: recipeData.timeToPrepare,
        ingredients: recipeData.ingredients,
        instructions: recipeData.instructions,
      },
    ],
  });
};

const getCategories = () => {
  return Category.find({});
};

const getCategorybyName = async (name) => {
  return Category.find({ category_name: new RegExp(name, "i") });

  /* console.log("cat", category.category);

  if (category) {
    return category;
  } else {
    throw new NoContentError("Data does not exist in our database.");
  } */
};

export default {
  recipeExist,
  createNewRecipe,
  getCategories,
  getCategorybyName,
};
