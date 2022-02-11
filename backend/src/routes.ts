import { Router, Request, Response } from "express";

import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "./controller/UsersController";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Hello world" });
});

routes.get("/users", getUsers);
routes.get("/users/:id", getUser);
routes.post("/users", createUser);
routes.put("/users/:id", updateUser);
routes.delete("/users/:id", deleteUser);

export default routes;
