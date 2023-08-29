import productRepository from "../repositories/productRepository.js";

const addProduct = async ({ product_name, image, categoryId }) => {
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
    categoryId,
  };

  const productCreated = await productRepository.addNewProduct(newProduct);

  console.log({ productCreated });
};

export default { addProduct };
