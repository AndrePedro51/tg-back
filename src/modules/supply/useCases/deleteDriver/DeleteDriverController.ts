import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteDriverUseCase } from "./DeleteDriverUseCase";

class DeleteDriverController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteDriverUseCase = container.resolve(DeleteDriverUseCase);

        const deleteDriver = await deleteDriverUseCase.execute(id);

        return response.status(200).json(deleteDriver);
    }
}

export { DeleteDriverController };
