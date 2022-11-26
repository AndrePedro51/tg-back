import { Request, Response } from "express";
import { container } from "tsyringe";
import { PutDriverUseCase } from "./PutDriversUseCase";

class PutDriverController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const {
            name,
            cpf,
            driver_license,
            license_category,
            antt,
            cnpj,
            active,
        } = request.body;

        const putDriverUseCase = container.resolve(PutDriverUseCase);

        const updatedDriver = await putDriverUseCase.execute(id, {
            name,
            cpf,
            driver_license,
            license_category,
            antt,
            cnpj,
            active,
        });

        return response.status(201).json(updatedDriver);
    }
}

export { PutDriverController };
