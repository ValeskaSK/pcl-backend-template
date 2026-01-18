const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const healthRoutes = require('./src/api/components/health/health.routes');
const errorHandler = require('./src/api/middlewares/errorHandler.middleware');
const ApiError = require('./src/utils/ApiError');

const app = express();

// ============================================================
// Middlewares globales
// ============================================================
app.use(helmet());
app.use(cors());
app.use(express.json());

// ============================================================
// Registro de rutas
// ============================================================
app.use('/api/v1/health', healthRoutes);

// ============================================================
// Manejo de errores
// ============================================================

// 404
app.use((req, res, next) => {
  next(new ApiError(404, 'Resource not found'));
});

// Error handler central
app.use(errorHandler);

module.exports = app;
