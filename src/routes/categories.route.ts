/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from 'express';
import {
  getAll, getById, create, updateById, deleteById,
} from '../controllers/categories.controller';
// const express = require("express");
const routercategories = express.Router();

routercategories.get('/category/', getAll);
routercategories.post('/category/', create);
routercategories.patch('/category/:idcategoriesroutercategories', updateById);
routercategories.get('/category/:idcategoriesroutercategories', getById);
routercategories.delete('/category/:idcategoriesroutercategories', deleteById);

export default routercategories;
