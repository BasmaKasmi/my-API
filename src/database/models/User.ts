/* eslint-disable import/no-cycle */
import { DataTypes } from 'sequelize';
import sequelize from '../instance';

const User: any = sequelize.define('User', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  adress: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },

}, {
  // Other model options go here
  // timestamps: true,
  // createdAt: true,
  // updatedAt: true,
});

// User.hasMany(Order);

export default User;
