import cloudinary from "../config/cloudinary.js";

export const deleteFile = async (url) => {
  if (!url) return false;
  try {
    const parts = url.split("/");
    const uploadIndex = parts.indexOf("upload");
    if (uploadIndex === -1) return false;

    // Extract the path after upload/vXXX/
    let fileWithExtension = parts.slice(uploadIndex + 2).join("/");
    
    // Remove the extension
    const lastDotIndex = fileWithExtension.lastIndexOf(".");
    if (lastDotIndex !== -1) {
      fileWithExtension = fileWithExtension.substring(0, lastDotIndex);
    }

    const result = await cloudinary.uploader.destroy(fileWithExtension);
    return result.result === "ok";
  } catch (error) {
    console.error(`[Cloudinary] Error deleting file ${url}: ${error.message}`);
    return false;
  }
};
