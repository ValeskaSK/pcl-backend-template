const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { rateLimit } = require('express-rate-limit');
const errorHandler = require('./src/api/middlewares/errorHandler.middleware');
const ApiError = require('./src/utils/ApiError');

const app = express();

// Middlewares Globales
app.use(helmet());
app.use(cors());
app.use(express.json());

// Limitador de peticiones (15 min - 100 peticiones)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Demasiadas peticiones desde esta IP, por favor intente más tarde.'
});
app.use(limiter);

/**
 * Rutas: Aquí montarás los routers de cada microservicio
 */
// app.use('/api/v1/auth', authRoutes);

// Manejo de rutas no encontradas (404)
app.use((req, res, next) => {
  next(new ApiError(404, 'Ruta no encontrada'));
});

// Middleware Global de Errores
app.use(errorHandler);

module.exports = app;