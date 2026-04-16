import { Router } from "express";
import AvaliacaoController from "../controllers/AvaliacaoController.js";

const router = Router();

router.get("/", AvaliacaoController.findAll);
router.post("/", AvaliacaoController.create);

export default router;