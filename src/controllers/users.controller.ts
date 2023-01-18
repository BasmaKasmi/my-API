import { Request, Response } from 'express';
import sequelize from '../database/instance';
import User from '../database/models/User';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { updateUser, createUser, deleteUser } from '../services/user.service';

const accessTokenSecret = 'youraccesstokensecret';
const jwt = require('jsonwebtoken');

async function getAll(req: Request, res: Response) {
  const user = await User.findAll();
  res.send(JSON.stringify(user, null, 2));
}
async function getById(req: Request, res: Response) {
  try {
    const id = req.params.iduser;
    const users = await User.findByPk(id);
    res.send(JSON.stringify(users, null, 2));
  } catch (error) {
    res.send('error');
  }
}

async function updateById(req: Request, res: Response) {
  try {
    await updateUser(req, res);
  } catch (error) {
    res.send('error');
  }
}

async function deleteById(req: Request, res: Response) {
  try {
    await deleteUser(req, res);
  } catch (error) {
    console.log(error);
    res.send('error');
  }
}
// createUser
async function create(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await User.createUser({
    email,
    password,
  });

  res.json({
    user,
    message: 'create user successfully',
  });
}

async function login(req: Request, res: Response) {
  // Read email and password from request body
  const { email, password } = req.body;

  // Filter user from the users array by email and password
  const user = User.find((u: any) => u.email === email && u.password === password);

  if (user) {
    // Generate an access token
    const accessToken = jwt.sign({ email: user.email, password: user.password }, accessTokenSecret);
    res.json({
      accessToken,
    });
  } else {
    res.send('email or password incorrect');
  }
}
export default sequelize;
export {
  getAll, getById, updateById, create, login, deleteById,
};
