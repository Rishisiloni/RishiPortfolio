import { Router } from "express";
import { handleContact } from "../controllers/contactController.js";

const router = Router();

// POST /api/contact - Handle contact form submission
router.post("/", handleContact);

export default router;
