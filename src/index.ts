import express from 'express';
import connectMongoose from './infra/clients/mongoose';
import { routes } from './interface/routes';

const app = express();

app.use(express.json());
app.use(routes);
connectMongoose();
// app.use("/api", bookRoutes);
// app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
