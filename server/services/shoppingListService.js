import shoppingListRepository from "../repositories/shoppingListRepository.js";
import { InvalidInputError } from "../errors/invalidInputError.js";
import { PermissionError } from "../errors/permissionError.js";

const createNewUserList = async (clientRequestId, newList) => {
  if (!newList.listName) {
    throw new InvalidInputError("You need to provide List's name.");
  }

  const userList = await shoppingListRepository.userHasList(
    newList.listName,
    clientRequestId
  );
  console.log({ userList });

  if (userList) {
    throw new InvalidInputError("Shopping list already exist.");
  } else {
    const createListName = await shoppingListRepository.createUserShoppingList(
      newList.listName,
      clientRequestId
    );
    return createListName;
  }
};

const checkBeforeEdit = async (
  clientRequestId,
  shoppingListId,
  newListName
) => {
  const userList = await shoppingListRepository.editShoppingList(
    clientRequestId,
    shoppingListId,
    newListName
  );

  console.log("serv", userList);

  if (userList) {
    return "Shopping was edited";
  } else {
    throw new PermissionError("You are not owner of this list");
  }
};

const checkBeforeDelete = async (clientRequestId, shoppingListId) => {
  const userList = await shoppingListRepository.deleteShoppingList(
    clientRequestId,
    shoppingListId
  );

  if (userList) {
    return "Shopping list was deleted";
  } else {
    throw new PermissionError("You are not owner of this list");
  }
};

const getUserList = async (clientRequestId, shoppingListId) => {
  try {
    const userList = await shoppingListRepository.getUserShoppingList(
      clientRequestId,
      shoppingListId
    );

    if (userList && userList.lists && userList.lists.length > 0) {
      return userList.lists[0];
    } else {
      console.log("Shopping list not found");
      return null;
    }
  } catch (error) {
    console.error("Error while fetching user list:", error);
    throw error; // You can choose to handle or propagate the error as needed
  }
};

export default {
  createNewUserList,
  checkBeforeEdit,
  checkBeforeDelete,
  getUserList,
};
