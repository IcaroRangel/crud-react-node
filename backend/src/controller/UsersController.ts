import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  const users = await getRepository(User).find();

  return res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const user = await getRepository(User).save(req.body);

  res.json(user);
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getRepository(User).findOne(id);

  return res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = req.body;

  const userUpdated = await getRepository(User).update(id, user);

  if (userUpdated.affected === 1) {
    const newUser = await getRepository(User).findOne(id);
    return res.json(newUser);
  }

  return res.status(404).json({ message: "User not found" });
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await getRepository(User).delete(id);

  if (user.affected === 1) {
    const userDeleted = await getRepository(User).findOne(id);
    return res.json(userDeleted);
  }

  res.json(user);
};
