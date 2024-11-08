import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectMongoose from './infrastructure/clients/mongoose';
import cors from 'cors';
import { routes } from './interface/routes';

const app = express();

app.use(express.json());
app.use(cors())

app.use(routes);

connectMongoose();

const PORT = process.env.API_PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
