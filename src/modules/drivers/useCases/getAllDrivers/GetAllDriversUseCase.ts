import { Drivers } from "@modules/drivers/infra/entities/Drivers";
import { IDriversRepository } from "@modules/drivers/repositories/IDriversRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class GetAllDriversUseCase {
    constructor(
        @inject("DriversRepository")
        private driversRepository: IDriversRepository
    ) {}
    async execute(): Promise<Drivers[]> {
        const drivers = await this.driversRepository.getAllDrivers();

        return drivers;
    }
}

export { GetAllDriversUseCase };
