const logger = require('../../utils/logger');

const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;
  if (!err.statusCode) {
    statusCode = 500;
    message = err.message || 'Internal Server Error';
  }

  logger.error(`${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;
