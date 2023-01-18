/* eslint-disable @typescript-eslint/no-unused-vars */

import express, { Request, Response } from 'express';
import {
  getAll, getById, create, login, updateById, deleteById,
} from '../controllers/users.controller';
// const express = require("express");
const { withJWTAuthMiddleware } = require('express-kun');

const routerusers = express.Router();

const protectedRouter = withJWTAuthMiddleware(routerusers, 'youraccesstokensecret');
protectedRouter.get('/user/', getAll);
routerusers.post('/user/', create);
routerusers.post('/user/', login);
routerusers.patch('/user/:idusers', updateById);
routerusers.get('/user/:idusers', getById);
routerusers.delete('/user/:idusers', deleteById);

export default routerusers;
