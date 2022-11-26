import { CreateUserController } from "@modules/users/useCases/createUser/CreateUserController";
import { DeleteUserController } from "@modules/users/useCases/deleteUser/DeleteUserController";
import { GetAllUsersController } from "@modules/users/useCases/getAllUsers/GetAllUsersController";
import { PutUserController } from "@modules/users/useCases/putUser/PutUserController";
import { Router } from "express";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const getUserController = new GetAllUsersController();
const deleteUserController = new DeleteUserController();
const putUserController = new PutUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", getUserController.handle);
usersRoutes.delete("/:id", deleteUserController.handle);
usersRoutes.put("/:id", putUserController.handle);

export { usersRoutes };
