import ApiResponse from "../utils/ApiResponse.js";

/**
 * Global Response Handler Middleware
 * Adds a `sendResponse` method to the `res` object for consistent API responses.
 */
const responseHandler = (req, res, next) => {
  res.sendResponse = (statusCode, data, message = "Success", pagination = null) => {
    const response = new ApiResponse(statusCode, data, message, pagination);
    return res.status(statusCode).json(response);
  };
  next();
};

export default responseHandler;
