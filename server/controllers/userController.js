import express from "express";
import userService from "../services/userService.js";
import { verifyToken } from "../services/authService.js";

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
    const userLoginTokken = await userService.login(req.body);

    res.status(200).send(userLoginTokken).end();
  } catch (error) {
    return next(error);
  }
});

user.use(verifyToken);

user.get("/api/users", async (req, res) => {
  res.status(200).json("hello").end();
});

export default user;
