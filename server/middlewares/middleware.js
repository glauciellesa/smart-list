import express from "express";
import cors from "cors";

const router = express.Router();

router.use(cors());
router.use(express.json());

export default router;
