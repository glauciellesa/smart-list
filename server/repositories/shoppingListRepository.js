import ShoppingList from "../models/ShoppingListModel.js";
import { ObjectId } from "mongodb";

const createShoppingList = async (userId) => {
  return await ShoppingList.create({
    user_id: new ObjectId(userId),
    lists: [],
  });
};

const userHasList = async (listName, clientId) => {
  console.log(listName, { clientId });
  const user = await ShoppingList.find(
    { user_id: new ObjectId(clientId) },
    { lists: { $elemMatch: { listName: listName } } }
  );

  console.log("mry", user);
  console.log("my", user[0]);

  if (user && user[0].lists && user[0].lists.length > 0) {
    return true; // The user has the list with the specified name.
  } else {
    return false; // The user does not have the list with the specified name.
  }
};

const createUserShoppingList = async (listName, clientId) => {
  const shoppingList = {
    listName: listName,
    productLists: [],
  };

  return await ShoppingList.findOneAndUpdate({
    user_id: clientId,
    $push: { lists: shoppingList },
    new: true,
  });
};

export default {
  createShoppingList,
  userHasList,
  createUserShoppingList,
};
