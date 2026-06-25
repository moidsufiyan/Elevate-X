import { Router } from "express";
import { listResources, getResourceById, createResource, updateResource, deleteResource, incrementDownload, uploadFile } from "../controllers/resource.controller.js";
import { resourceValidator } from "../validators/resource.validator.js";
import validate from "../middlewares/validate.js";
import authenticate from "../middlewares/authenticate.js";
import authorize from "../middlewares/authorize.js";
import { uploadResource as resourceFileUploadMiddleware } from "../middlewares/uploadMiddleware.js";

const router = Router();

router.get("/", listResources);
router.get("/:id", getResourceById);
router.post("/:id/download", incrementDownload);

router.post("/", authenticate, authorize("mentor", "admin"), resourceValidator, validate, createResource);
router.put("/:id", authenticate, authorize("mentor", "admin"), resourceValidator, validate, updateResource);
router.delete("/:id", authenticate, authorize("admin"), deleteResource);
router.post("/:id/file", authenticate, authorize("mentor", "admin"), resourceFileUploadMiddleware.single("file"), uploadFile);

export default router;
