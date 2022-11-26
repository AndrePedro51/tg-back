import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {
    async handle(request: Request, response: Response): Promise<Response>{
        const {
            license_plate,
            brand,
            color,
            model,
            category
        } = request.body;

        const createCarUseCase = container.resolve(CreateCarUseCase);

        const car = await createCarUseCase.execute({
            license_plate,
            brand,
            color,
            model,
            category
        });

        return response.status(201).json(car);
        
    }
}

export { CreateCarController };