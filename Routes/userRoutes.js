import express from "express";
import * as usersController from "../Controllers/usersController.js";
export const userRoutes = express.Router();

router
  .route("/")
  .get(usersController.getUsers)
  .post(usersController.createUser);

router.route("/check").get(usersController.getUser);
