import { Router } from "express";
import { carsRoutes } from "./cars.routes";
import { driversRoutes } from "./drivers.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/cars", carsRoutes);
router.use("/users", usersRoutes);
router.use("/drivers", driversRoutes);

export { router };
