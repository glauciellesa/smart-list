import shoppingListProductRepo from "../repositories/shoppingListProductRepo.js";
import { InvalidInputError } from "../errors/invalidInputError.js";
import { PermissionError } from "../errors/permissionError.js";
import productRepository from "../repositories/productRepository.js";

const addProductIntoUserList = async (
  clienteRequestId,
  shoppingListId,
  newProduct
) => {
  if (!newProduct.product_id) {
    return "You need to provide a product name";
  } else {
    const addedProduct = await shoppingListProductRepo.addProductsIntoList(
      clienteRequestId,
      shoppingListId,
      newProduct
    );
    if (addedProduct) {
      return "Product add to shopping list.";
    } else {
      throw new InvalidInputError("Try again");
    }
  }
};

const joinAndgetProductsFromList = async (clientRequestId, shoppingListId) => {
  const productsFromList =
    await shoppingListProductRepo.getProductsFromShoppingList(
      clientRequestId,
      shoppingListId
    );

  const listProductsIds = productsFromList.map((listProduct) => {
    return listProduct.product_id;
  });

  const listProducts = await productRepository.getProductByIds(listProductsIds);

  const result = productsFromList.map((productList) => {
    const findedProduct = listProducts.find((product) => {
      return product._id.toString() === productList.product_id.toString();
    });

    return {
      id: productList._id,
      product_id: productList.product_id,
      frequency: productList.frequency,
      quantity: productList.quantity,
      product: findedProduct,
    };
  });

  return result;
};

const checkProductBeforeEdit = async (
  clienteRequestId,
  shoppingListId,
  productId,
  newProductName
) => {
  const productEdited = await shoppingListProductRepo.editProductoInList(
    clienteRequestId,
    shoppingListId,
    productId,
    newProductName
  );

  if (productEdited) {
    return "Product was edited";
  } else {
    return "You are not owner of this list";
  }
};

const checkProductBeforeDelete = async (
  clienteRequestId,
  shoppingListId,
  productListId
) => {
  const productFromList = await shoppingListProductRepo.removeProductFromList(
    clienteRequestId,
    shoppingListId,
    productListId
  );

  if (productFromList) {
    return "Shopping list was deleted";
  } else {
    throw new PermissionError("You can not delete this product");
  }
};

export default {
  addProductIntoUserList,
  checkProductBeforeEdit,
  joinAndgetProductsFromList,
  checkProductBeforeDelete,
};
