import Product from "../models/ProductModel.js";

const productExist = async (productName) => {
  const query = await Product.findOne({ productName }).exec();
  if (query) {
    return true;
  } else {
    return false;
  }
};

const addNewProduct = (product) => {
  return Product.create({
    product_name: product.product_name,
    image: product.image,
    category_id: product.category_id,
  });
};

const getProductbyName = async (name) => {
  return await Product.find({ product_name: new RegExp(name, "i") }).exec();
};

const getProducts = async (name) => {
  return await Product.find({}).exec();
};

export default { productExist, addNewProduct, getProductbyName, getProducts };
