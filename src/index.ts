import express from "express";

const app = express();

app.use(express.json());
// app.use("/api", bookRoutes);
// app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
