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

  return await ShoppingList.findOneAndUpdate(
    { user_id: clientId },
    { $push: { lists: shoppingList } }
  );
};

const getAllUserList = async (clientId) => {
  const userList = await ShoppingList.find({
    user_id: new ObjectId(clientId),
  });
  return userList[0].lists;
};

const editShoppingList = async (shoppingListId, newListName) => {
  const editedList = await ShoppingList.findOneAndUpdate(
    { "lists._id": new ObjectId(shoppingListId) },
    { $set: { "lists.$.listName": newListName } }
  );
  console.log(editedList);
  return editedList;
};

const deleteShoppingList = async (shoppingListId) => {
  return await ShoppingList.updateOne(
    { "lists._id": new ObjectId(shoppingListId) },
    { $pull: { lists: { _id: new ObjectId(shoppingListId) } } }
  );
};

export default {
  createShoppingList,
  userHasList,
  createUserShoppingList,
  getAllUserList,
  editShoppingList,
  deleteShoppingList,
};
