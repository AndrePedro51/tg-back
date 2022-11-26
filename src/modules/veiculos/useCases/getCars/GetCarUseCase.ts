import { Car } from "../../infra/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class GetCarUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {}

    async execute(): Promise<Car[]> {
        const cars = await this.carsRepository.findAllCars();

        return cars;
    }
}

export { GetCarUseCase };
