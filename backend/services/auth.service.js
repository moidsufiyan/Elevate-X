import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password, hashed) => {
  return await bcrypt.compare(password, hashed);
};

export const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};
