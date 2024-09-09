import { Router } from "express";
import { getAllMakes, getById } from "../controllers/vehicleController";

const router = Router();

router.get("/makes", getAllMakes);
router.get("/type/:id", getById);

export default router;
