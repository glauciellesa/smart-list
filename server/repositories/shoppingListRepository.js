import ShoppingList from "../models/ShoppingListModel.js";
import { ObjectId } from "mongodb";

const createShoppingList = (userId) => {
  return ShoppingList.create({
    user_id: new ObjectId(userId),
    lists: [],
  });
};

export default { createShoppingList };
