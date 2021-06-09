import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize(
  'DB_NAME',
  'DB_USER_NAME',
  'DB_PASSWORD',
  {
    dialect: 'mysql',
    host: 'localhost',
  },
);
