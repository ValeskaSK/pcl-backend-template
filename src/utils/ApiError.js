/**
 * ApiError
 * --------
 * Error controlado de la aplicación.
 * Usar SIEMPRE para errores esperados (validación, permisos, recursos no encontrados).
 * Nunca lanzar Error directamente en controllers o services.
 */

class ApiError extends Error {
  constructor(statusCode, message, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ApiError;
