import { Request, Response } from 'express';
import sequelize from '../database/instance';
import Product from '../database/models/Product';
import { updateProduct, createProduct, deleteProduct } from '../services/product.service';

async function getAll(req: Request, res: Response) {
  const products = await Product.findAll();
  res.send(JSON.stringify(products, null, 2));
}
async function getById(req: Request, res: Response) {
  try {
    const id = req.params.idproduct;
    const Products = await Product.findByPk(id);
    res.send(JSON.stringify(Products, null, 2));
  } catch (error) {
    res.send('error');
  }
}
// createProduct
async function create(req: Request, res: Response) {
  try {
    await createProduct(req, res);
  } catch (error) {
    res.send('error');
  }
}

async function updateById(req: Request, res: Response) {
  try {
    await updateProduct(req, res);
  } catch (error) {
    res.send('error');
  }
}

async function deleteById(req: Request, res: Response) {
  try {
    await deleteProduct(req, res);
  } catch (error) {
    console.log(error);
    res.send('error');
  }
}
export default sequelize;
export {
  getAll, getById, updateById, create, deleteById,
};
