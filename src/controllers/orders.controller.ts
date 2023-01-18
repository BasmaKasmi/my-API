import { Request, Response } from 'express';
import sequelize from '../database/instance';
import Order from '../database/models/Order';
import { updateOrder, createOrder, deleteOrder } from '../services/order.service';

async function getAll(req: Request, res: Response) {
  const orders = await Order.findAll();
  res.send(JSON.stringify(orders, null, 2));
}
async function getById(req: Request, res: Response) {
  try {
    const id = req.params.idOrder;
    const Orders = await Order.findByPk(id);
    res.send(JSON.stringify(Orders, null, 2));
  } catch (error) {
    res.send('error');
  }
}
// createOrder
async function create(req: Request, res: Response) {
  try {
    await createOrder(req, res);
  } catch (error) {
    res.send('error');
  }
}

async function updateById(req: Request, res: Response) {
  try {
    await updateOrder(req, res);
  } catch (error) {
    res.send('error');
  }
}

async function deleteById(req: Request, res: Response) {
  try {
    await deleteOrder(req, res);
  } catch (error) {
    console.log(error);
    res.send('error');
  }
}
export default sequelize;
export {
  getAll, getById, updateById, create, deleteById,
};
