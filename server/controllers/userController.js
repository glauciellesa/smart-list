import express from "express";
import userService from "../services/userService.js";
import { verifyToken } from "../services/authService.js";
import userRepository from "../repositories/userRepository.js";

const user = express.Router();

user.post("/api/register", async (req, res, next) => {
  try {
    const createdUser = await userService.register(req.body);

    const responseData = {
      token: createdUser.token,
      email: createdUser.email,
      githubAccount: createdUser.githubAccount,
      fullName: createdUser.fullName,
    };
    // Send the object as JSON response
    res.status(201).json(responseData).end();
  } catch (error) {
    return next(error);
  }
});

user.post("/api/login", async (req, res, next) => {
  try {
    const userLoginToken = await userService.login(req.body);

    res.status(200).send(userLoginToken).end();
  } catch (error) {
    return next(error);
  }
});

user.use(verifyToken);

user.get("/api/users/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;

    const user = await userRepository.getUserById(userId);
    res.status(200).json(user).end();
  } catch (error) {
    return next(error);
  }
});

export default user;
