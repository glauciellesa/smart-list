import ShoppingList from "../models/ShoppingListModel.js";

const addProductsIntoList = async (clienteId, shoppingListId, newProduct) => {
  const added = await ShoppingList.findOneAndUpdate(
    {
      user_id: clienteId,
      "lists._id": shoppingListId,
    },
    {
      $push: {
        "lists.0.productLists": {
          product_id: newProduct.product_id,
          frequency: newProduct.frequency,
          quantity: newProduct.quantity,
        },
      },
    }
  );

  if (added.lists[0].productLists.length > 0) {
    return true;
  } else {
    return false;
  }
};

const getProductsFromShoppingList = async (clienteId, shoppingListId) => {
  const userList = await ShoppingList.find({
    user_id: clienteId,
    "lists._id": shoppingListId,
  });
  return userList[0].lists[0].productLists;
};

const editProductoInList = async (
  clienteRequestId,
  shoppingListId,
  productId,
  newProduct
) => {
  console.log(
    { clienteRequestId },
    { productId },
    { shoppingListId },
    { newProduct }
  );
  const editedProduct = await ShoppingList.findOneAndUpdate(
    {
      user_id: clienteRequestId,
      "lists._id": shoppingListId,
      "lists.0.productLists.$.product_id": productId,
    },
    {
      $set: {
        "lists.0.productLists": {
          frequency: newProduct.frequency,
          quantity: newProduct.quantity,
        },
      },
    }
  );
  console.log("produc", editedProduct);
  return editedProduct;
};

export default {
  addProductsIntoList,
  getProductsFromShoppingList,
  editProductoInList,
};
