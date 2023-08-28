import Product from "../models/ProductModel.js";

const productExist = async (productName) => {
  const query = await Product.findOne({ productName }).exec();
  if (query) {
    return true;
  } else {
    return false;
  }
};

const categoryExist = async (category) => {
  const query = await Product.findOne({ category }).exec();
  if (query) {
    return true;
  } else {
    return false;
  }
};

const createNewCategory = (product) => {
  return Product.create({
    category,
  });
};

const addNewProductToCategory = (product) => {
  return Product.create({
    product_name: product.product_name,
    image: product.image,
  });
};

export default { productExist, addNewProductToCategory };
