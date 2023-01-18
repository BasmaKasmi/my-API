/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
import { Request, Response } from 'express';
import sequelize from '../database/instance';
import User from '../database/models/User';

// createUser
async function createUser(req: Request, res: Response) {
  try {
    const users = await User.create(req.query);
    res.send(JSON.stringify(users, null, 2));
  } catch (error) {
    res.send('error');
  }
}

async function updateUser(req: Request, res: Response) {
  try {
    const id = req.params.idUsers;
    const users = await User.update(req.query, { where: { idUser: `${id}` } });
    const nvUser = await User.findByPk(id);
    res.send(JSON.stringify(nvUser, null, 2));
  } catch (error) {
    res.send('error');
  }
}

async function deleteUser(req: Request, res: Response) {
  try {
    const id = req.params.idUsers;
    await User.destroy({ where: { idUser: id } });
    return res.send('200 OK');
  } catch (error) {
    console.log(error);
    res.send('error');
  }
}
export default sequelize;

export {
  createUser, updateUser, deleteUser,
};
