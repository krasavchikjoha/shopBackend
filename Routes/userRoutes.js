import express from "express";
import * as usersController from "../Controllers/usersController.js";
export const userRoutes = express.Router();

userRoutes
  .route("/")
  .get(usersController.getUsers)
  .post(usersController.createUser);

userRoutes.route("/check").get(usersController.getUser);
