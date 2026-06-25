import { Router } from "express";
import { submitForm } from "../controllers/contact.controller.js";
import { contactValidator } from "../validators/contact.validator.js";
import validate from "../middlewares/validate.js";

const router = Router();

router.post("/", contactValidator, validate, submitForm);

export default router;
