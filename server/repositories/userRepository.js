import User from "../models/UsersModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

const createToken = async (email) => {
  // Generate a JWT token
  const token = await new Promise((resolve, rejects) => {
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
  return token;
};

const checkIfEmailExists = async (email) => {
  const query = await User.findOne({ email: email }).exec();
  if (query) {
    return true;
  } else {
    return false;
  }
};

const registerUser = async (user) => {
  return await User.create({
    first_name: user.first_name,
    last_name: user.last_name,
    githubAccount: user.githubAccount,
    email: user.email,
    password: user.password,
  });
};

const existUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    return true;
  }

  return false;
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email: email }).exec();
};

const getUserById = async (userId) => {
  return await User.findOne({ _id: userId }).exec();
};

export default {
  createToken,
  checkIfEmailExists,
  registerUser,
  existUser,
  getUserByEmail,
  getUserById,
};
