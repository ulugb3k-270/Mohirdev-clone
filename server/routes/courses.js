import express from "express";
import { working, getCourses } from "../controller/courses.js";

const router = express.Router();

router.get("/", working);
router.get("/get-all", getCourses)

export default router;
