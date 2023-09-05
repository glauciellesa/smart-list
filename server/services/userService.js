import userRepository from "../repositories/userRepository.js";
import validator from "./validator.js";
import { InvalidInputError } from "../errors/invalidInputError.js";
import { PermissionError } from "../errors/permissionError.js";
import shoppingListRepository from "../repositories/shoppingListRepository.js";
import recipeRepository from "../repositories/recipeRepository.js";

const register = async ({
  first_name,
  last_name,
  githubAccount,
  email,
  password,
}) => {
  if (!first_name || !last_name || !githubAccount || !email || !password) {
    throw new InvalidInputError("All user data is required");
  }

  const isEmailDuplicate = await userRepository.checkIfEmailExists(email);

  if (isEmailDuplicate) {
    throw new InvalidInputError("Email already exists, go to login page");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    first_name,
    last_name,
    githubAccount,
    email,
    password: hashedPassword,
  };

  const userId = await userRepository.registerUser(newUser);

  if (userId) {
    await shoppingListRepository.createShoppingList(userId._id);
    await recipeRepository.createRecipeArray(userId._id);
  } else {
    throw new PermissionError("Shopping List wasn't created.");
  }

  const token = await userRepository.createToken(email);

  const fullName = `${first_name} ${last_name}`;

  return { token, email, githubAccount, fullName };
};

const login = async ({ email, password }) => {
  if (!email || !password) {
    throw new InvalidInputError("Email or password are missing.");
  }

  if (!validator.validateEmail(email)) {
    throw new InvalidInputError("Email not valid.");
  }

  const isUser = await userRepository.existUser(email, password);
  if (!isUser) {
    throw new InvalidInputError("Email or password do not exist.");
  }

  const user = await userRepository.getUserByEmail(email);
  const token = await userRepository.createToken(email);
  let userData;

  if (user) {
    userData = {
      token: token,
      email: user.email,
      githubAccount: user.githubAccount,
      fullName: `${user.first_name} ${user.last_name}`,
    };
  } else {
    throw new Error("User was not found");
  }

  return userData;
};

export default { register, login };
