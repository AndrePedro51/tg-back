import { Car } from "../../infra/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { UpdateResult } from "typeorm";

interface IRequest {
    license_plate?: string;
    brand?: string;
    color?: string;
    model?: string,
    category?: string;
}

@injectable()
class PutCarUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ){}

    async execute(id: string, {
        license_plate,
        brand,
        color,
        model,
        category,
    }: IRequest): Promise<UpdateResult>{
        const carExist = await this.carsRepository.findById(id);
        if(!carExist){
            throw new AppError("Car do not exist");
        }
        const carUpdated = await this.carsRepository.putCar(id, {
            license_plate,
            brand,
            color,
            model,
            category, 
        });

        return carUpdated;
    }
}

export { PutCarUseCase };