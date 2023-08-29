import categoryRepository from "../repositories/categoryRepository.js";
import { InvalidInputError } from "../errors/invalidInputError.js";

const addNewCategory = async (newCategory) => {
  if (!newCategory.category) {
    throw new InvalidInputError(
      "You need to provide the category name in order to create a new one"
    );
  }

  const categoryDuplicate = await categoryRepository.categoryExist(
    newCategory.category
  );

  if (categoryDuplicate) {
    throw new InvalidInputError("Category already exists in categories list.");
  }

  const newCategoryData = {
    category_name: newCategory.category,
  };

  const categoryCreated = await categoryRepository.createNewCategory(
    newCategoryData
  );
  return categoryCreated;
};

export default { addNewCategory };
