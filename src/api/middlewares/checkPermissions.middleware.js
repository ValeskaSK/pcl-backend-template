const ApiError = require('../../utils/ApiError');

const checkPermissions = (requiredPermissions) => {
  return (req, res, next) => {
    const permissions = req.auth.payload.permissions || [];
    const hasPermission = requiredPermissions.every((permission) =>
      permissions.includes(permission)
    );

    if (!hasPermission) {
      return next(new ApiError(403, 'Forbidden: Insufficient permissions'));
    }
    next();
  };
};

module.exports = checkPermissions;
