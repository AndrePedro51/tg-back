import { Users } from "@modules/users/infra/entities/Users";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class GetAllUsersUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute(): Promise<Users[]> {
        const users = await this.usersRepository.getAllUsers();

        return users;
    }
}

export { GetAllUsersUseCase };
