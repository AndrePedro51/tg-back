import { Request, Response } from "express";
import { container } from "tsyringe";
import { PutCarUseCase } from "./PutCarUseCase";

class PutCarController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;
        const{
            license_plate,
            brand,
            color,
            model,
            category
        } = request.body;
        const putCarUseCase = container.resolve(PutCarUseCase);

        const cars = await putCarUseCase.execute(id, {license_plate, brand, color, model, category});

        return response.status(201).json(cars);
        
    }
}

export { PutCarController };