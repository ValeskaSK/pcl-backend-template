const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { rateLimit } = require('express-rate-limit');
const errorHandler = require('./src/api/middlewares/errorHandler.middleware');
const geoRoutes = require('./src/api/components/geo/geo.routes');
const ApiError = require('./src/utils/ApiError');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

app.use('/api/v1/geo', geoRoutes);

app.use((req, res, next) => {
  next(new ApiError(404, 'Not Found'));
});

app.use(errorHandler);

module.exports = app;
