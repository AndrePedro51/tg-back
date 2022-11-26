import { ICarsRepository } from "../../repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { DeleteResult } from "typeorm";

@injectable()
class DeleteCarUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ){}

    async execute(id: string): Promise<DeleteResult>{
        const carExist = await this.carsRepository.findById(id);
        if(!carExist){
            throw new AppError("Car do not exist");
        }
        const carDeleted = await this.carsRepository.deleteCar(id);

        return carDeleted;
    }
}

export { DeleteCarUseCase };