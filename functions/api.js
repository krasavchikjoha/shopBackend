import express from "express";
import ServerlessHttp from "serverless-http";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Server");
});

export const handler = ServerlessHttp(app);
