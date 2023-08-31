import shoppingListRepository from "../repositories/shoppingListRepository.js";
import { InvalidInputError } from "../errors/invalidInputError.js";

const createNewUserList = async (clienteRequestId, newList) => {
  if (!newList.listName) {
    throw new InvalidInputError("You need to provide List's name.");
  }

  const userList = await shoppingListRepository.userHasList(
    newList.listName,
    clienteRequestId
  );
  console.log({ userList });

  if (userList) {
    throw new InvalidInputError("Shopping list already exist.");
  } else {
    const createListName = await shoppingListRepository.createUserShoppingList(
      newList.listName,
      clienteRequestId
    );
    return createListName;
  }
};

export default { createNewUserList };
