/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
import { Request, Response } from 'express';
import sequelize from '../database/instance';
import Category from '../database/models/Category';

// createCategory
async function createCategory(req: Request, res: Response) {
  try {
    const Categories = await Category.create(req.query);
    res.send(JSON.stringify(Categories, null, 2));
  } catch (error) {
    res.send('error');
  }
}
async function updateCategory(req: Request, res: Response) {
  try {
    const id = req.params.idCategories;
    const Categorys = await Category.update(req.query, { where: { idCategory: `${id}` } });
    const nvCategory = await Category.findByPk(id);
    res.send(JSON.stringify(nvCategory, null, 2));
  } catch (error) {
    res.send('error');
  }
}

async function deleteCategory(req: Request, res: Response) {
  try {
    const id = req.params.idCategories;
    await Category.destroy({ where: { idCategory: id } });
    return res.send('200 OK');
  } catch (error) {
    console.log(error);
    res.send('error');
  }
}
export default sequelize;

export {
  createCategory, updateCategory, deleteCategory,
};
