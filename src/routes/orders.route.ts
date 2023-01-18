/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from 'express';
import {
  getAll, getById, create, updateById, deleteById,
} from '../controllers/orders.controller';
// const express = require("express");
const routerorders = express.Router();

routerorders.get('/order/', getAll);
routerorders.post('/order/', create);
routerorders.patch('/order/:idorders', updateById);
routerorders.get('/order/:idorders', getById);
routerorders.delete('/order/:idorders', deleteById);

export default routerorders;
