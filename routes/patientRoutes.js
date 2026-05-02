import express from "express";
import {  createPatient } from "../controllers/patientControllers.js";

const router = express.Router();

router.post("/create", createPatient);


export default router;