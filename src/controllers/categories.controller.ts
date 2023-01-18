import { Request, Response } from 'express';
import sequelize from '../database/instance';
import Category from '../database/models/Category';
import { updateCategory, createCategory, deleteCategory } from '../services/category.service';

async function getAll(req: Request, res: Response) {
  const categories = await Category.findAll();
  res.send(JSON.stringify(categories, null, 2));
}
async function getById(req: Request, res: Response) {
  try {
    const id = req.params.idCategory;
    const Categorys = await Category.findByPk(id);
    res.send(JSON.stringify(Categorys, null, 2));
  } catch (error) {
    res.send('error');
  }
}
// createCategory
async function create(req: Request, res: Response) {
  try {
    await createCategory(req, res);
  } catch (error) {
    res.send('error');
  }
}

async function updateById(req: Request, res: Response) {
  try {
    await updateCategory(req, res);
  } catch (error) {
    res.send('error');
  }
}

async function deleteById(req: Request, res: Response) {
  try {
    await deleteCategory(req, res);
  } catch (error) {
    console.log(error);
    res.send('error');
  }
}
export default sequelize;
export {
  getAll, getById, updateById, create, deleteById,
};
