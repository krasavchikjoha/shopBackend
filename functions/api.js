import express from "express";
import ServerlessHttp from "serverless-http";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import { userRoutes } from "../Routes/userRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to Server");
});
app.use("/users", userRoutes);
configDotenv({ path: "./.env" });

const DB = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("Connected to database");
});

export const handler = ServerlessHttp(app);
