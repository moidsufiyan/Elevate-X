import { Router } from "express";
import { listPosts, getPost, createPost, updatePost, deletePost, uploadCover, toggleLike } from "../controllers/blog.controller.js";
import { blogValidator } from "../validators/blog.validator.js";
import validate from "../middlewares/validate.js";
import authenticate from "../middlewares/authenticate.js";
import authorize from "../middlewares/authorize.js";
import { uploadResource as coverUploadMiddleware } from "../middlewares/uploadMiddleware.js";

const router = Router();

router.get("/", listPosts);
router.get("/:idOrSlug", getPost);

router.post("/", authenticate, authorize("mentor", "admin"), blogValidator, validate, createPost);
router.put("/:id", authenticate, authorize("mentor", "admin"), blogValidator, validate, updatePost);
router.delete("/:id", authenticate, authorize("mentor", "admin"), deletePost);
router.post("/:id/cover", authenticate, authorize("mentor", "admin"), coverUploadMiddleware.single("cover"), uploadCover);
router.post("/:id/like", authenticate, toggleLike);

export default router;
