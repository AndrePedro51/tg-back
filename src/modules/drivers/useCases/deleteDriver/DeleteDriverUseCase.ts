import { IDriversRepository } from "@modules/drivers/repositories/IDriversRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { DeleteResult } from "typeorm";

@injectable()
class DeleteDriverUseCase {
    constructor(
        @inject("DriversRepository")
        private driversRepository: IDriversRepository
    ) {}

    async execute(id: string): Promise<DeleteResult> {
        const driverExist = await this.driversRepository.findById(id);
        if (!driverExist) {
            throw new AppError("Motorista não existe!");
        }
        const deletedUser = await this.driversRepository.deleteDriver(id);

        return deletedUser;
    }
}

export { DeleteDriverUseCase };
