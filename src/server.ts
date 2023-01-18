import express, { Request, Response } from 'express';
import routeruser from './routes/users.route';
import routerproducts from './routes/products.route';
import routercategories from './routes/categories.route';
import routerorders from './routes/orders.route';

const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.get('/', (req: Request, res:Response) => {
  res.send('Hello everybody!');
});

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`);
});

app.use('/', routeruser);
app.use('/', routerproducts);
app.use('/', routercategories);
app.use('/', routerorders);
app.use(bodyParser.json());
