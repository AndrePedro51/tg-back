import { IPutUserDTO } from "@modules/users/dtos/IPutUserDto";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { IPutCarDTO } from "@modules/veiculos/dtos/IPutCarDtos";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { UpdateResult } from "typeorm";

@injectable()
class PutUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute(
        id: string,
        { cpf, email, isAdmin, name, password }: IPutUserDTO
    ): Promise<UpdateResult> {
        const userExist = await this.usersRepository.findById(id);
        if (!userExist) {
            throw new AppError("User do not exist");
        }
        const updatedUser = await this.usersRepository.updateUser(id, {
            cpf,
            email,
            isAdmin,
            name,
            password,
        });

        return updatedUser;
    }
}

export { PutUserUseCase };
