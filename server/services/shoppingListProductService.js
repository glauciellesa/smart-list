import shoppingListProductRepo from "../repositories/shoppingListProductRepo.js";
import { InvalidInputError } from "../errors/invalidInputError.js";

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

  console.log("serv", productEdited);

  if (productEdited) {
    return "Product was edited";
  } else {
    return "You are not owner of this list";
  }
};

const checkProductBeforeDelete = async () => {};

export default {
  addProductIntoUserList,
  checkProductBeforeEdit,
  checkProductBeforeDelete,
};
