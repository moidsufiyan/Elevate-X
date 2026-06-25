import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const avatarStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "elevate-x-avatars",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
    transformation: [{ width: 400, height: 400, crop: "fill" }],
  },
});

const logoStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "elevate-x-logos",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

const resourceStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "elevate-x-resources",
    allowed_formats: ["jpg", "png", "jpeg", "pdf", "zip", "doc", "docx", "mp4"],
  },
});

export const uploadAvatar = multer({ storage: avatarStorage });
export const uploadLogo = multer({ storage: logoStorage });
export const uploadResource = multer({ storage: resourceStorage });
