import shoppingListService from "../shoppingListService";

const shoppingListLoader = async ({ params }) => {
  return shoppingListService.getShoppingList(
    `shoppingLists/${params.shoppingListId}`
  );
};

export default { shoppingListLoader };
