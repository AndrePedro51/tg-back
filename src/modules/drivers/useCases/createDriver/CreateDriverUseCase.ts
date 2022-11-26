import { Drivers } from "@modules/drivers/infra/entities/Drivers";
import { IDriversRepository } from "@modules/drivers/repositories/IDriversRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
    name: string;
    cpf: string;
    driver_license: number;
    license_category: string;
    antt: number;
    cnpj: string;
    active: boolean;
}

@injectable()
class CreateDriverUseCase {
    constructor(
        @inject("DriversRepository")
        private driversRepository: IDriversRepository
    ) {}

    async execute({
        name,
        cpf,
        driver_license,
        license_category,
        antt,
        cnpj,
        active,
    }: IRequest): Promise<Drivers> {
        const driverAlreadyExist = await this.driversRepository.findByCpf(cpf);
        if (driverAlreadyExist) {
            throw new AppError("Driver already exist");
        }
        const driver = await this.driversRepository.create({
            name,
            cpf,
            driver_license,
            license_category,
            antt,
            cnpj,
            active,
        });

        return driver;
    }
}

export { CreateDriverUseCase };
