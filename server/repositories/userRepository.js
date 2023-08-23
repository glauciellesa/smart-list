import User from "../models/UsersModel.js";
import bcrypt from "bcrypt";

const checkIfEmailExists = async (email) => {
  const query = await User.findOne({ email: email }).exec();
  if (query) {
    return true;
  } else {
    return false;
  }
};

const registerUser = (user) => {
  return User.create({
    first_name: user.first_name,
    last_name: user.last_name,
    picture: user.picture,
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

export default {
  checkIfEmailExists,
  registerUser,
  existUser,
  getUserByEmail,
};
