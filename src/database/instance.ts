/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dialect, Sequelize } from 'sequelize';

const hostname:string = process.env.DB_HOST || 'localhost';
const username:string = process.env.DB_USERNAME || 'basma';
const password:string = process.env.DB_PASSWORD || 'root';
const database:string = process.env.DB_NAME || 'coffee_shop';
const dialect:Dialect | undefined = process.env.DB_DIALECT as Dialect || 'mysql';

const sequelize = new Sequelize(database, username, password, {
  host: hostname,
  dialect: 'mysql'/* dialect */,
});
export default sequelize;
