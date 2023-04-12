import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllDriversUseCase } from "./GetAllDriversUseCase";

class GetAllDriversController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getAllDriversUseCase = container.resolve(GetAllDriversUseCase);

        const drivers = await getAllDriversUseCase.execute();

        return response.status(200).json(drivers);
    }
}

export { GetAllDriversController };
