const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const createPool = async () => {
  return oracledb.createPool({
    user: process.env.DB_USER || 'user_placeholder',
    password: process.env.DB_PASSWORD || 'password_placeholder',
    connectString: process.env.DB_HOST
      ? `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SERVICE_NAME}`
      : 'localhost:1521/FREE',

    poolMin: Number(process.env.DB_POOL_MIN) || 1,
    poolMax: Number(process.env.DB_POOL_MAX) || 5,
    poolIncrement: Number(process.env.DB_POOL_INCREMENT) || 1,
  });
};

module.exports = { createPool };
