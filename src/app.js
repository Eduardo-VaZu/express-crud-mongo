import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { router } from "./routes/book.routes.js";
import { swaggerSpec } from "../config/swagger.js";
import swaggerUi from "swagger-ui-express";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/api", router);

// Database connection
mongoose
  .connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}/api/books`);
      console.log(`Swagger running on http://localhost:${port}/api-docs`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
