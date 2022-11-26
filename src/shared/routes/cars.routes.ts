import { CreateCarController } from "../../modules/veiculos/useCases/createCar/CreateCarController";
import { GetCarController } from "../../modules/veiculos/useCases/getCars/GetCarController";
import { DeleteCarController } from "../../modules/veiculos/useCases/deleteCar/DeleteCarController";
import { PutCarController } from "../../modules/veiculos/useCases/putCar/PutCarController";
import { Router } from "express";


const carsRoutes = Router();

const createCarController = new CreateCarController();
const getCarController = new GetCarController();
const deleteCarController = new DeleteCarController();
const putCarController = new PutCarController();

carsRoutes.post("/", createCarController.handle);
carsRoutes.get("/", getCarController.handle);
carsRoutes.delete("/:id", deleteCarController.handle);
carsRoutes.put("/:id", putCarController.handle);

export { carsRoutes };