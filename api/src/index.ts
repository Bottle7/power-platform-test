import express, { Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import { healthRouter, notFoundRouter, swaggerRouter } from './routes';

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.get('/', (_: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.use('/', [
  healthRouter,
  swaggerRouter,

  // Not found router should be the last one
  notFoundRouter,
]);

app.listen(port, () => {
  console.log(`Server is live at http://localhost:${port}`);
});

