import { IPutDriverDTO } from "@modules/drivers/dtos/IPutDriverDto";
import { IDriversRepository } from "@modules/drivers/repositories/IDriversRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { UpdateResult } from "typeorm";

@injectable()
class PutDriverUseCase {
    constructor(
        @inject("DriversRepository")
        private driversRepository: IDriversRepository
    ) {}

    async execute(
        id: string,
        {
            name,
            cpf,
            driver_license,
            license_category,
            antt,
            cnpj,
            active,
        }: IPutDriverDTO
    ): Promise<UpdateResult> {
        const driverExist = await this.driversRepository.findById(id);
        if (!driverExist) {
            throw new AppError("Driver do not exist");
        }
        const updatedDriver = await this.driversRepository.updateDriver(id, {
            name,
            cpf,
            driver_license,
            license_category,
            antt,
            cnpj,
            active,
        });

        return updatedDriver;
    }
}

export { PutDriverUseCase };
