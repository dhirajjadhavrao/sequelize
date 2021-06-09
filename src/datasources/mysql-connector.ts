import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize('test', 'newuser', 'password', {
  dialect: 'mysql',
  host: 'localhost',
});
