import { container } from "tsyringe";
import { UsersRepository } from "@modules/users/infra/repositories/UsersRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { CarsRepository } from "../../modules/veiculos/infra/repositories/CarsRepository";
import { ICarsRepository } from "../../modules/veiculos/repositories/ICarsRepository";
import { IDriversRepository } from "@modules/drivers/repositories/IDriversRepository";
import { DriversRepository } from "@modules/drivers/infra/repositories/DriversRepository";

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);
container.registerSingleton<IDriversRepository>(
    "DriversRepository",
    DriversRepository
);
