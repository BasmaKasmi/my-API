/* eslint-disable import/no-cycle */
import { DataTypes } from 'sequelize';
import sequelize from '../instance';

const Product: any = sequelize.define('Product', {
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
  reference: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },

}, {
  // Other model options go here
  // timestamps: true,
  // createdAt: true,

  // updatedAt: true,
});

// Product.belongsTo(Category);
export default Product;
