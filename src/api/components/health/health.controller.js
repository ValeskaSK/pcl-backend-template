/**
 * Health Controller
 * -----------------
 * Endpoint de diagnóstico del microservicio.
 * No contiene lógica de negocio.
 */

const logger = require('../../../utils/logger');

const getHealth = async (req, res) => {
  logger.debug('Health check requested');

  res.status(200).json({
    status: 'ok',
    service: 'pcl-backend-template',
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  getHealth
};
