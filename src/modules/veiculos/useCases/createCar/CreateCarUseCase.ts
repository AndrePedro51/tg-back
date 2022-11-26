import { Car } from "../../infra/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
    license_plate: string;
    brand: string;
    color: string;
    model: string;
    category: string;
}

@injectable()
class CreateCarUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {}

    async execute({
        license_plate,
        brand,
        color,
        model,
        category,
    }: IRequest): Promise<Car> {
        const carAlreadyExist = await this.carsRepository.findByLicensePlate(
            license_plate
        );
        if (carAlreadyExist) {
            throw new AppError("Car already exist");
        }
        const car = await this.carsRepository.create({
            license_plate,
            brand,
            color,
            model,
            category,
        });

        return car;
    }
}

export { CreateCarUseCase };
