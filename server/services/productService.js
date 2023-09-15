import productRepository from "../repositories/productRepository.js";
import { InvalidInputError } from "../errors/invalidInputError.js";

const addProduct = async ({ product_name, image, category_id }) => {
  if (!product_name) {
    throw new InvalidInputError(
      "You need to provide at least the name of the product"
    );
  }
  const productDuplicate = await productRepository.productExist(product_name);

  if (productDuplicate) {
    throw new InvalidInputError(
      "Product already exists in product list, you can not add it again"
    );
  }

  const newProduct = {
    product_name,
    image,
    category_id,
  };

  const productCreated = await productRepository.addNewProduct(newProduct);

  return productCreated;
};

export default { addProduct };
