import { Request, Response } from "express";
import { container } from "tsyringe";
import { PutUserUseCase } from "./PutUserUseCase";

class PutUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { cpf, email, isAdmin, name, password } = request.body;

        const putUserUseCase = container.resolve(PutUserUseCase);

        const updatedUser = await putUserUseCase.execute(id, {
            cpf,
            email,
            isAdmin,
            name,
            password,
        });

        return response.status(201).json(updatedUser);
    }
}

export { PutUserController };
