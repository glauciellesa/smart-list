import Category from "../models/CategoryModel.js";

const categoryExist = async (category) => {
  console.log(" repo", category);
  const query = await Category.findOne({ category_name: category }).exec();
  if (query) {
    return true;
  } else {
    return false;
  }
};

const createNewCategory = (category) => {
  console.log("reposs", category);
  return Category.create(category);
};

export default { categoryExist, createNewCategory };
