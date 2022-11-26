import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetCarUseCase } from "./GetCarUseCase";

class GetCarController {
    async handle(request: Request, response: Response): Promise<Response>{
        const getCarUseCase = container.resolve(GetCarUseCase);

        const cars = await getCarUseCase.execute();

        return response.status(201).json(cars);
        
    }
}

export { GetCarController };