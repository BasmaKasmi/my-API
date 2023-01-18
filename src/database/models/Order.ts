/* eslint-disable import/no-cycle */
import { DataTypes } from 'sequelize';
import sequelize from '../instance';

const Order: any = sequelize.define('Order', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

}, {
});
export default Order;
