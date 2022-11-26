import { ICreateUserDto } from "@modules/users/dtos/ICreateUserDto";
import { IPutUserDTO } from "@modules/users/dtos/IPutUserDto";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
import { Users } from "../entities/Users";

class UsersRepository implements IUsersRepository {
    private repository: Repository<Users>;

    constructor() {
        this.repository = getRepository(Users);
    }
    async create({
        cpf,
        email,
        isAdmin,
        name,
        password,
        id,
    }: ICreateUserDto): Promise<Users> {
        const user = this.repository.create({
            cpf,
            email,
            isAdmin,
            name,
            password,
            id,
        });

        await this.repository.save(user);

        return user;
    }
    async findByEmail(email: string): Promise<Users> {
        const user = await this.repository.findOne({ email });

        return user;
    }

    async findById(id: string): Promise<Users> {
        const user = await this.repository.findOne({ id });

        return user;
    }

    async getAllUsers(): Promise<Users[]> {
        const users = await this.repository.find();

        return users;
    }

    async deleteUser(id: string): Promise<DeleteResult> {
        const deletedUser = await this.repository.delete(id);

        return deletedUser;
    }

    async updateUser(
        id: string,
        { cpf, email, isAdmin, name, password }: IPutUserDTO
    ): Promise<UpdateResult> {
        const updatedUser = this.repository.update(id, {
            cpf,
            email,
            isAdmin,
            name,
            password,
        });

        return updatedUser;
    }
}

export { UsersRepository };
