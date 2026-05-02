import express from "express";
import {createPatient,getAllPatients,updatePatient,deletePatient} from "../controllers/patientControllers.js";

const router = express.Router();

router.get("/getAll", getAllPatients);
router.post("/create", createPatient);
router.put("/update/:id", updatePatient);
router.delete("/delete/:id", deletePatient);

export default router;