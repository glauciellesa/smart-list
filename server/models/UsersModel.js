import mongoose from "mongoose";
import validator from "../services/validator.js";
import connection from "../repositories/connection.js";

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  first_name: {
    type: String,
    trim: true,
    required: true,
    validate: [validator.isNotEmpty, "First name is empty"],
  },
  last_name: {
    type: String,
    trim: true,
    required: true,
    validate: [validator.isNotEmpty, "Last name is empty"],
  },
  picture: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validator.validateEmail, "Please fill a valid email address"],
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    validate: [validator.isNotEmpty, "Password is empty"],
  },
});

const User = connection.model("User", usersSchema);

export default User;
