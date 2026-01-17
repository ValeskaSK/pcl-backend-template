/**
 * Logger
 * ------
 * Logger centralizado del microservicio.
 * - En desarrollo: logs legibles por consola.
 * - En producción: logs estructurados (JSON) para observabilidad.
 */

const winston = require('winston');

const isProduction = process.env.NODE_ENV === 'production';

const logger = winston.createLogger({
  level: isProduction ? 'info' : 'debug',
  format: isProduction
    ? winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    : winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
  transports: [new winston.transports.Console()],
});

module.exports = logger;
