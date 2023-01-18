/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from 'express';
import {
  getAll, getById, create, updateById, deleteById,
} from '../controllers/products.controller';
// const express = require("express");
const routerproducts = express.Router();

routerproducts.get('/product/', getAll);
routerproducts.post('/product/', create);
routerproducts.patch('/product/:idproduct', updateById);
routerproducts.get('/product/:idproduct', getById);
routerproducts.delete('/product/:idproduct', deleteById);

export default routerproducts;
