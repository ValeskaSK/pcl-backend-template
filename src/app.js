const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const errorHandler = require('./middlewares/errorHandler.middleware');
const ApiError = require('./utils/ApiError');
const healthRoutes = require('./api/routes/health');

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
app.use('/health', healthRoutes);


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
