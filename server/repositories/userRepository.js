import User from "../models/UsersModel.js";

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

export default {
  checkIfEmailExists,
  registerUser,
};
