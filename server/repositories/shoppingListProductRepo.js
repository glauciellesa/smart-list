import ShoppingList from "../models/ShoppingListModel.js";

const addProductsIntoList = async (clienteId, shoppingListId, newProduct) => {
  const added = await ShoppingList.findOneAndUpdate(
    {
      user_id: clienteId,
      "lists._id": shoppingListId,
    },
    {
      $push: {
        "lists.$.productLists": {
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
  const userLists = await ShoppingList.find(
    {
      user_id: clienteId,
    },
    { lists: { $elemMatch: { _id: shoppingListId } } }
  );

  return userLists[0].lists[0].productLists;
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
      "lists.$.productLists.$.product_id": productId,
    },
    {
      $set: {
        "lists.$.productLists": {
          frequency: newProduct.frequency,
          quantity: newProduct.quantity,
        },
      },
    }
  );

  return editedProduct;
};

const removeProductFromList = async (
  clienteRequestId,
  shoppingListId,
  productId
) => {
  try {
    const updatedList = await ShoppingList.findOneAndUpdate(
      {
        user_id: clienteRequestId,
        "lists._id": shoppingListId,
      },
      {
        $pull: {
          "lists.$.productLists": {
            product_id: productId,
          },
        },
      },
      { new: true }
    );

    if (!updatedList) {
      throw new Error("Shopping list not found or product not removed.");
    }

    console.log(updatedList); // The updated document should be printed to the console

    return updatedList;
  } catch (error) {
    console.error("Error removing product from shopping list:", error);
    throw error;
  }
};

export default {
  addProductsIntoList,
  getProductsFromShoppingList,
  editProductoInList,
  removeProductFromList,
};
