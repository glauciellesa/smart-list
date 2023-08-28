import productRepository from "../repositories/productRepository.js";

const addProduct = async ({ product_name, image, category }) => {
  if (!product_name) {
    throw new InvalidInputError(
      "You need to provide at least the name of the product"
    );
  }
  const productDuplicate = await productRepository.productExist(product_name);
};

export default { addProduct };
