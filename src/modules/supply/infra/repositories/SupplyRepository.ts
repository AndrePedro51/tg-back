import { ICreateDriverDto } from "@modules/drivers/dtos/ICreateDriverDto";
import { getRepository, Repository } from "typeorm";
import { ISupplyRepository } from "@modules/supply/repositories/ISupplyRepository";
import { Supply } from "../entities/Supply";
import { ICreateSupplyInput } from "@modules/supply/dtos/ICreateSupply";

class SupplyRepository implements ISupplyRepository {
    private repository: Repository<Supply>;

    constructor() {
        this.repository = getRepository(Supply);
    }
    async createSupply({
        id,
        quantity,
        type,
        user_id,
        car_id,
        description,
        driver_id,
    }: ICreateSupplyInput): Promise<Supply> {
        const supply = this.repository.create({
            id,
            car_id,
            description,
            driver_id,
            quantity,
            type,
            user_id,
        });
        return await this.repository.save(supply);
    }
}

export { SupplyRepository };
