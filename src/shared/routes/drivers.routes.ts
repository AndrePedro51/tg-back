import { CreateDriverController } from "@modules/drivers/useCases/createDriver/CreateDriverController";
import { DeleteDriverController } from "@modules/drivers/useCases/deleteDriver/DeleteDriverController";
import { GetAllDriversController } from "@modules/drivers/useCases/getAllDrivers/GetAllUsersController";
import { PutDriverController } from "@modules/drivers/useCases/putDrivers/PutUserController";
import { Router } from "express";

const driversRoutes = Router();

const createDriverController = new CreateDriverController();
const getDriversController = new GetAllDriversController();
const deleteDriverController = new DeleteDriverController();
const putDriverController = new PutDriverController();

driversRoutes.post("/", createDriverController.handle);
driversRoutes.get("/", getDriversController.handle);
driversRoutes.delete("/:id", deleteDriverController.handle);
driversRoutes.put("/:id", putDriverController.handle);

export { driversRoutes };
