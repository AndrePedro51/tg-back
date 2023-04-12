import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDriverUseCase } from "./CreateDriverUseCase";

class CreateDriverController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            cpf,
            driver_license,
            license_category,
            antt,
            cnpj,
            active,
        } = request.body;

        const createDriverUseCase = container.resolve(CreateDriverUseCase);

        const user = await createDriverUseCase.execute({
            name,
            cpf,
            driver_license,
            license_category,
            antt,
            cnpj,
            active,
        });

        return response.status(201).json(user);
    }
}

export { CreateDriverController };
