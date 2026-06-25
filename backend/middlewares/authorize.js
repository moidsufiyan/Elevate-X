import ApiError from "../utils/ApiError.js";

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new ApiError(401, "Authentication required"));
    }

    if (!roles.includes(req.user.role)) {
      return next(
        new ApiError(
          403,
          `Forbidden: Role '${req.user.role}' is unauthorized for this action`
        )
      );
    }

    next();
  };
};

export const authorizeRoles = authorize;
export default authorize;
