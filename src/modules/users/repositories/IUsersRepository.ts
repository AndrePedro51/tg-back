import { DeleteResult, UpdateResult } from "typeorm";
import { ICreateUserDto } from "../dtos/ICreateUserDto";
import { IPutUserDTO } from "../dtos/IPutUserDto";
import { Users } from "../infra/entities/Users";

export interface IUsersRepository {
    create(data: ICreateUserDto): Promise<Users>;
    findByEmail(email: string): Promise<Users>;
    getAllUsers(): Promise<Users[]>;
    deleteUser(id: string): Promise<DeleteResult>;
    findById(id: string): Promise<Users>;
    updateUser(id: string, {}: IPutUserDTO): Promise<UpdateResult>;
}
