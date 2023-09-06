import React from "react";
import shoppingListService from "../../../service/shoppingListService";

const ShoppingListDetail = () => {
  return <div>listtt</div>;
};

export default ShoppingListDetail;

export const shoppingListLoader = async ({ params }) => {
  return shoppingListService.getShoppingList(
    `shoppingLists/${params.shoppingListId}`
  );
};
