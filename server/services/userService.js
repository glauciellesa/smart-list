import bcrypt from "bcrypt";
import repository from "../repositories/userRepository.js";
import { InvalidInputError } from "../errors/invalidInputError.js";

const register = async ({
  first_name,
  last_name,
  picture,
  email,
  password,
}) => {
  if (!first_name || !last_name || !password || !email || !password) {
    throw new InvalidInputError("All user data is required");
  }

  const isEmailDuplicate = await repository.checkIfEmailExists(email);

  if (isEmailDuplicate) {
    throw new InvalidInputError("Email already exists, go to login page");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    first_name,
    last_name,
    picture,
    email,
    password: hashedPassword,
  };

  const userId = await repository.registerUser(newUser);
  return userId;
};

export default { register };
