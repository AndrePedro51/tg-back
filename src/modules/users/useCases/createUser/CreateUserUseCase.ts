import { Users } from "@modules/users/infra/entities/Users";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
    name: string;
    email: string;
    cpf: string;
    password: string;
    isAdmin: boolean;
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        name,
        email,
        cpf,
        password,
        isAdmin,
    }: IRequest): Promise<Users> {
        const userAlreadyExist = await this.usersRepository.findByEmail(email);
        if (userAlreadyExist) {
            throw new AppError("User already exist");
        }
        const user = await this.usersRepository.create({
            name,
            email,
            cpf,
            password,
            isAdmin,
        });

        return user;
    }
}

export { CreateUserUseCase };
