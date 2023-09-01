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

const fetchUserOwnedLists = async (clienteRequestId, shoppingListId) => {
  const list = await ShoppingList.findOne(
    { user_id: clienteRequestId },
    { "lists._id": shoppingListId }
  );
};

const editShoppingList = async (
  clienteRequestId,
  shoppingListId,
  newListName
) => {
  console.log({ clienteRequestId }, { shoppingListId }, newListName.listName);

  const editedList = await ShoppingList.findOneAndUpdate(
    { user_id: clienteRequestId, "lists._id": shoppingListId },
    { $set: { lists: { listName: newListName.listName } } }
  );
  console.log("repo", { editedList });
  return editedList;
};

const deleteShoppingList = async (clienteRequestId, shoppingListId) => {
  return await ShoppingList.findOneAndUpdate(
    { user_id: clienteRequestId, "lists._id": shoppingListId },
    { $pull: { lists: { _id: shoppingListId } } }
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
