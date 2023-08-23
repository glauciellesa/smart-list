import express from "express";
import userService from "../services/userService.js";
import { InvalidInputError } from "../errors/invalidInputError.js";
import { verifyToken } from "../services/authService.js";

const router = express.Router();
/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Creates a user
 *     description: insert a new user to the db.
 */
router.post("/api/register", async (req, res) => {
  try {
    const createdUserId = await userService.register(req.body);
    res.status(201).json({ id: createdUserId });
  } catch (error) {
    if (error instanceof InvalidInputError) {
      res
        .status(400)
        .json({ message: "Registration failed", error: error.message });
    } else {
      res
        .status(500)
        .json({ message: "Registration failed", error: error.message });
    }
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
    if (error instanceof InvalidInputError) {
      res
        .status(400)
        .json({ message: "No Access Token", error: error.message });
    } else {
      res
        .status(500)
        .json({ message: "Registration failed", error: error.message });
    }
  }
});

router.use(verifyToken);

router.get("/api/users", verifyToken, async (req, res) => {
  res.status(200).json("hello").end();
});

export default router;
