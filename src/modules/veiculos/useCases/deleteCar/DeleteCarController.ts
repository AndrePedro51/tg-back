import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteCarUseCase } from "./DeleteCarUseCase";

class DeleteCarController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;
        const deleteCarUseCase = container.resolve(DeleteCarUseCase);

        const carDeleted = await deleteCarUseCase.execute(id);

        return response.status(200).json(carDeleted);
        
    }
}

export { DeleteCarController };