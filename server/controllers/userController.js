import express from "express";
import userService from "../services/userService.js";
import { InvalidInputError } from "../errors/invalidInputError.js";

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

export default router;
