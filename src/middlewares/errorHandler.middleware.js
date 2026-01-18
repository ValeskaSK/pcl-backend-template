const ApiError = require('../utils/ApiError');

module.exports = (err, req, res, next) => {
  console.error(err); // 👈 AÑADE SOLO ESTA LÍNEA

  const statusCode = err.statusCode || 500;
  const message =
    err instanceof ApiError
      ? err.message
      : 'Internal server error';

  res.status(statusCode).json({
    statusCode,
    message
  });
};
