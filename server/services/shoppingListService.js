import userRepository from "../repositories/userRepository.js";

const addNewShoppingList = async (clienteRequestId, newList) => {
  console.log(newList);
  if (!newList.product_id) {
    throw new InvalidInputError("You need to provide the product name.");
  }

  const productDuplicate = await shoppingListRepository.shoppingListExist(
    newList.name
  );
};

export default { addNewShoppingList };
