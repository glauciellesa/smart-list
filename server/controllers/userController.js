import express from "express";
import userService from "../services/userService.js";
import { verifyToken } from "../services/authService.js";

const router = express.Router();
/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Creates a user
 *     description: insert a new user to the db.
 */
router.post("/api/register", async (req, res, next) => {
  try {
    const createdUserId = await userService.register(req.body);
    res.status(201).json({ id: createdUserId });
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
router.post("/api/login", async (req, res) => {
  try {
    const userLoginTokken = await userService.login(req.body);

    /* return res.redirect('/users/' + req.user.username); */
    res.status(200).send({ userLoginTokken }).end();
  } catch (error) {
    return next(error);
  }
});

router.use(verifyToken);

router.get("/api/users", verifyToken, async (req, res) => {
  res.status(200).json("hello").end();
});

export default router;
