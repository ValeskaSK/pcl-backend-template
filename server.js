/**
 * server.js
 *
 * Punto de entrada del microservicio.
 * - Inicializa el pool de Oracle
 * - Levanta el servidor HTTP
 */
require('dotenv').config();

const app = require('./app');
const { createPool } = require('./src/config/database.config');
const logger = require('./src/utils/logger');

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

(async () => {
  try {
    await createPool();
    logger.info('Oracle Database pool initialized successfully');

    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT} in ${NODE_ENV} mode`);
    });
  } catch (error) {
    logger.error('Error starting server', error);
    process.exit(1);
  }
})();
