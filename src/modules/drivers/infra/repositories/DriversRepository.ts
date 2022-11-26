import { ICreateDriverDto } from "@modules/drivers/dtos/ICreateDriverDto";
import { IPutDriverDTO } from "@modules/drivers/dtos/IPutDriverDto";
import { IDriversRepository } from "@modules/drivers/repositories/IDriversRepository";
import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
import { Drivers } from "../entities/Drivers";

class DriversRepository implements IDriversRepository {
    private repository: Repository<Drivers>;

    constructor() {
        this.repository = getRepository(Drivers);
    }
    async create({
        id,
        name,
        cpf,
        driver_license,
        license_category,
        antt,
        cnpj,
        active,
    }: ICreateDriverDto): Promise<Drivers> {
        const driver = this.repository.create({
            id,
            name,
            cpf,
            driver_license,
            license_category,
            antt,
            cnpj,
            active,
        });

        await this.repository.save(driver);

        return driver;
    }
    async findByCpf(cpf: string): Promise<Drivers> {
        const driver = await this.repository.findOne({ cpf });

        return driver;
    }

    async findById(id: string): Promise<Drivers> {
        const driver = await this.repository.findOne({ id });

        return driver;
    }

    async getAllDrivers(): Promise<Drivers[]> {
        const drivers = await this.repository.find();

        return drivers;
    }

    async deleteDriver(id: string): Promise<DeleteResult> {
        const deletedDriver = await this.repository.delete(id);

        return deletedDriver;
    }

    async updateDriver(
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
        const updatedUser = this.repository.update(id, {
            name,
            cpf,
            driver_license,
            license_category,
            antt,
            cnpj,
            active,
        });

        return updatedUser;
    }
}

export { DriversRepository };
