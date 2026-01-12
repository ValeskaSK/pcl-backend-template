const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const config = require('./src/config');
const logger = require('./src/utils/logger');
const db = require('./src/models');

const startServer = async () => {
  try {
    await db.sequelize.authenticate();
    logger.info('Database connection has been established successfully.');

    app.listen(config.port, () => {
      logger.info(`Server running on port ${config.port} in ${config.env} mode`);
    });
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

startServer();
