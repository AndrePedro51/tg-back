import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { DeleteResult } from "typeorm";

@injectable()
class DeleteUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute(id: string): Promise<DeleteResult> {
        const userExist = await this.usersRepository.findById(id);
        if (!userExist) {
            throw new AppError("User do not exist");
        }
        const deletedUser = await this.usersRepository.deleteUser(id);

        return deletedUser;
    }
}

export { DeleteUserUseCase };
