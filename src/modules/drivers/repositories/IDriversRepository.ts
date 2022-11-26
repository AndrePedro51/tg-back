import { DeleteResult, UpdateResult } from "typeorm";
import { ICreateDriverDto } from "../dtos/ICreateDriverDto";
import { IPutDriverDTO } from "../dtos/IPutDriverDto";
import { Drivers } from "../infra/entities/Drivers";

export interface IDriversRepository {
    create(data: ICreateDriverDto): Promise<Drivers>;
    findByCpf(cpf: string): Promise<Drivers>;
    getAllDrivers(): Promise<Drivers[]>;
    deleteDriver(id: string): Promise<DeleteResult>;
    findById(id: string): Promise<Drivers>;
    updateDriver(id: string, {}: IPutDriverDTO): Promise<UpdateResult>;
}
