/**
 * Oracle Database Configuration
 * -----------------------------
 * Este módulo crea y gestiona el pool de conexiones Oracle usando el driver nativo.
 *
 * Decisión arquitectónica:
 * - No se utiliza ORM (Sequelize).
 * - Se trabaja con SQL puro para control total y máximo rendimiento.
 * - El pool evita abrir/cerrar conexiones por request.
 */

const oracledb = require('oracledb');

// Devuelve resultados como objetos JS: { COLUMN_NAME: value }
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const createPool = async () => {
  return oracledb.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SERVICE_NAME}`,
    poolMin: Number(process.env.DB_POOL_MIN),
    poolMax: Number(process.env.DB_POOL_MAX),
    poolIncrement: Number(process.env.DB_POOL_INCREMENT)
  });
};

module.exports = { createPool };

