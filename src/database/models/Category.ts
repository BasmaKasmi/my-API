import { DataTypes } from 'sequelize';
import sequelize from '../instance';

import Product from './Product';

const Category: any = sequelize.define('Category', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

}, {
  // Other model options go here
  // timestamps: true,
  // createdAt: true,

  // updatedAt: true,
});

Category.hasMany(Product);
Product.belongsTo(Category);

export default Category;
