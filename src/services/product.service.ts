/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
import { Request, Response } from 'express';
import sequelize from '../database/instance';
import Product from '../database/models/Product';

// createProduct
async function createProduct(req: Request, res: Response) {
  try {
    const products = await Product.create(req.query);
    res.send(JSON.stringify(products, null, 2));
  } catch (error) {
    res.send('error');
  }
}
async function updateProduct(req: Request, res: Response) {
  try {
    const id = req.params.idProducts;
    const Products = await Product.update(req.query, { where: { idProduct: `${id}` } });
    const nvProduct = await Product.findByPk(id);
    res.send(JSON.stringify(nvProduct, null, 2));
  } catch (error) {
    res.send('error');
  }
}

async function deleteProduct(req: Request, res: Response) {
  try {
    const id = req.params.idProducts;
    await Product.destroy({ where: { idProduct: id } });
    return res.send('404 not found');
  } catch (error) {
    console.log(error);
    res.send('error');
  }
}
export default sequelize;

export {
  createProduct, updateProduct, deleteProduct,
};
