import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectMongoose from './infrastructure/clients/mongoose';
import { routes } from './interface/routes';

// Verifique se a chave aparece

const app = express();

app.use(express.json());
app.use(routes);

connectMongoose();

const PORT = process.env.API_PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
