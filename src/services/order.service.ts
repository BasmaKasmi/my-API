/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
import { Request, Response } from 'express';
import sequelize from '../database/instance';
import Order from '../database/models/Order';

// createOrder
async function createOrder(req: Request, res: Response) {
  try {
    const orders = await Order.create(req.query);
    res.send(JSON.stringify(orders, null, 2));
  } catch (error) {
    res.send('error');
  }
}
async function updateOrder(req: Request, res: Response) {
  try {
    const id = req.params.idOrders;
    const Orders = await Order.update(req.query, { where: { idOrder: `${id}` } });
    const nvOrder = await Order.findByPk(id);
    res.send(JSON.stringify(nvOrder, null, 2));
  } catch (error) {
    res.send('error');
  }
}

async function deleteOrder(req: Request, res: Response) {
  try {
    const id = req.params.idOrders;
    await Order.destroy({ where: { idOrder: id } });
    return res.send('200 OK');
  } catch (error) {
    console.log(error);
    res.send('error');
  }
}
export default sequelize;

export {
  createOrder, updateOrder, deleteOrder,
};
