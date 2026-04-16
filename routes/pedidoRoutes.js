import { Router } from "express";
import PedidoController from "../controllers/PedidoController.js";

const router = Router();

router.post("/", PedidoController.create);
router.get("/", PedidoController.findAll);
router.get("/:id", PedidoController.findById);

export default router;