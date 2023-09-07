import shoppingListService from "../shoppingListService";

const shoppingListLoader = async ({ params }) => {
  return shoppingListService.getShoppingList(
    `shoppingLists/${params.shoppingListId}`
  );
};

const productListLoader = async ({ params }) => {
  console.log(params);
  /* return shoppingListService.getShoppingList(
    `shoppingLists/${params.shoppingListId}`
  ); */
};

export default { shoppingListLoader, productListLoader };
