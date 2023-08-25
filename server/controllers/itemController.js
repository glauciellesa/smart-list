import express from "express";
import { verifyToken } from "../services/authService.js";

const router = express.Router();

router.use(verifyToken);
/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Creates a user
 *     description: insert a new user to the db.
 */

router.put("/api/items", async (req, resp, next) => {});

router.get("/api/items", async (req, resp, next) => {});
