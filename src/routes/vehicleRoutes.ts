import { Router } from "express";
import { getAllMakes } from "../controllers/vehicleController";

const router = Router();

router.get("/makes", getAllMakes);

export default router;
