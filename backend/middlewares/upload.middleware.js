import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";
import ApiError from "../utils/ApiError.js";

// Storage Configuration Factory
const createStorage = (folderName, allowedFormats, transformations = []) => {
  return new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: `elevate-x/${folderName}`,
      allowed_formats: allowedFormats,
      transformation: transformations,
    },
  });
};

// File Filter for Validation
const fileFilter = (allowedMimeTypes) => (req, file, cb) => {
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new ApiError(400, `Invalid file type. Allowed types: ${allowedMimeTypes.join(", ")}`), false);
  }
};

const IMAGE_MIME_TYPES = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
const PDF_MIME_TYPES = ["application/pdf"];

// 1. Profile Pictures (Optimized for avatars)
export const uploadProfilePicture = multer({
  storage: createStorage("profiles", ["jpg", "png", "jpeg", "webp"], [{ width: 250, height: 250, crop: "fill", gravity: "face" }]),
  fileFilter: fileFilter(IMAGE_MIME_TYPES),
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
});

// 2. Startup Logos (Optimized for standard logos)
export const uploadStartupLogo = multer({
  storage: createStorage("startups/logos", ["jpg", "png", "jpeg", "webp"], [{ width: 500, height: 500, crop: "fit" }]),
  fileFilter: fileFilter(IMAGE_MIME_TYPES),
  limits: { fileSize: 2 * 1024 * 1024 },
});

// 3. Blog Images (Optimized for web reading, auto quality)
export const uploadBlogImage = multer({
  storage: createStorage("blogs", ["jpg", "png", "jpeg", "webp"], [{ width: 1200, crop: "limit", fetch_format: "auto", quality: "auto" }]),
  fileFilter: fileFilter(IMAGE_MIME_TYPES),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// 4. Resource PDFs
export const uploadResource = multer({
  storage: createStorage("resources", ["pdf"]),
  fileFilter: fileFilter(PDF_MIME_TYPES),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});

// 5. Generic Image Upload (For posts, etc.)
export const uploadGenericImage = multer({
  storage: createStorage("general", ["jpg", "png", "jpeg", "webp"], [{ fetch_format: "auto", quality: "auto" }]),
  fileFilter: fileFilter(IMAGE_MIME_TYPES),
  limits: { fileSize: 5 * 1024 * 1024 },
});
