import express from "express";
import userService from "../services/userService.js";
import { verifyToken } from "../services/authService.js";

const user = express.Router();
/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Creates a user
 *     description: insert a new user to the db.
 */
user.post("/api/register", async (req, res, next) => {
  try {
    const createdUser = await userService.register(req.body);
    res.status(201).json({ createdUser });
  } catch (error) {
    return next(error);
  }
});

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: User login
 *     description: User are able to do login.
 */
user.post("/api/login", async (req, res, next) => {
  try {
    const userLoginTokken = await userService.login(req.body);

    /* return res.redirect('/users/' + req.user.username); */
    res.status(200).send({ userLoginTokken }).end();
  } catch (error) {
    return next(error);
  }
});
user.use(verifyToken);

user.get("/api/users", async (req, res) => {
  res.status(200).json("hello").end();
});

export default user;
