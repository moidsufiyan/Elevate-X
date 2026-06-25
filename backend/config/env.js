import dotenv from "dotenv";
dotenv.config();

const requiredEnvVars = [
  "PORT",
  "MONGODB_URI",
  "JWT_SECRET",
  "JWT_REFRESH_SECRET",
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
];

export const validateEnv = () => {
  const missing = [];
  requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
      missing.push(varName);
    }
  });

  if (missing.length > 0) {
    console.error(`[FATAL ERROR] Missing required environment variables on boot: ${missing.join(", ")}`);
    process.exit(1);
  }
};
