import shoppingListRepository from "../repositories/shoppingListRepository.js";
import { InvalidInputError } from "../errors/invalidInputError.js";

const addNewShoppingList = async (clienteRequestId, newList) => {
  if (!newList.listName) {
    throw new InvalidInputError("You need to provide the product name.");
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

export default { addNewShoppingList };
