import Category from "../models/CategoryModel.js";

const categoryExist = async (category) => {
  const query = await Category.findOne({ category_name: category }).exec();
  if (query) {
    return true;
  } else {
    return false;
  }
};

const createNewCategory = (category) => {
  return Category.create(category);
};

const getCategories = () => {
  return Category.find({});
};

const getCategorybyName = async (name) => {
  return Category.find({ category_name: new RegExp(name, "i") });
};

export default {
  categoryExist,
  createNewCategory,
  getCategories,
  getCategorybyName,
};
