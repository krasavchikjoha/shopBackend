import express from "express";
import * as usersController from "../Controllers/usersController.js";
const router = express.Router();

router
  .route("/")
  .get(usersController.getUsers)
  .post(usersController.createUser);

router.route("/check").get(usersController.getUser);

export default router;
