import sequelize from './instance';
import User from './models/User';
import Product from './models/Product';
import Category from './models/Category';
import Order from './models/Order';

// async function connect() {
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error: any) => {
    console.error('Unable to connect to the database:', error);
  });
async function migrate() {
  try {
    await User.sync({ alter: true });
    console.log('The table for the User model was just (re)created!');

    await Category.sync({ alter: true });
    console.log('The table for the User model was just (re)created!');

    await Product.sync({ alter: true });
    console.log('The table for the User model was just (re)created!');

    await Order.sync({ alter: true });
    console.log('The table for the User model was just (re)created!');

  } catch (error) {
    console.log(error);
  }
}

migrate();
