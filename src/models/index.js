const Sequelize = require('sequelize');
const config = require('../config/database.config');
const logger = require('../utils/logger');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: (msg) => logger.debug(msg),
    define: dbConfig.define
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Region = require('./region.model')(sequelize);
db.Provincia = require('./provincia.model')(sequelize);
db.Comuna = require('./comuna.model')(sequelize);

db.Region.hasMany(db.Provincia, { foreignKey: 'region_id', as: 'provincias' });
db.Provincia.belongsTo(db.Region, { foreignKey: 'region_id', as: 'region' });

db.Region.hasMany(db.Comuna, { foreignKey: 'region_id', as: 'comunas' });
db.Comuna.belongsTo(db.Region, { foreignKey: 'region_id', as: 'region' });

db.Provincia.hasMany(db.Comuna, { foreignKey: 'provincia_id', as: 'comunas' });
db.Comuna.belongsTo(db.Provincia, { foreignKey: 'provincia_id', as: 'provincia' });

module.exports = db;
