import express from "express";
import userService from "../services/userService.js";

const router = express.Router();

router.post("/api/register", async (req, res) => {
  try {
    const createdUserId = userService.register(req.body);
    res.status(201).json({ id: createdUserId });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Registration failed", error: error.message });
  }
});

export default router;
