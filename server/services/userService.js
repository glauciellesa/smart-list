import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userRepository from "../repositories/userRepository.js";
import validator from "./validator.js";
import { InvalidInputError } from "../errors/invalidInputError.js";
import config from "../config/config.js";

const register = async ({
  first_name,
  last_name,
  picture,
  email,
  password,
}) => {
  if (!first_name || !last_name || !picture || !email || !password) {
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
    picture,
    email,
    password: hashedPassword,
  };

  const userId = await userRepository.registerUser(newUser);
  return userId;
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
  console.log({ isUser });
  // Generate a JWT token
  return new Promise((resolve, rejects) => {
    jwt.sign(
      { email },
      config.jwtKey,
      { expiresIn: "1h" },
      //when we have calback we need convert to promisse if not the value will be undefined
      (err, token) => {
        if (err) {
          console.error(err);
          rejects(new InvalidInputError("Internal Server Error"));
        } else {
          resolve(token);
        }
      }
    );
  });
};

export default { register, login };
