import { DeleteResult, UpdateResult } from "typeorm";
import { ICreateCarDTO } from "../dtos/ICreateCarsDtos";
import { IPutCarDTO } from "../dtos/IPutCarDtos";
import { Car } from "../infra/entities/Car";

interface ICarsRepository {
    create(data: ICreateCarDTO): Promise<Car>;
    findByLicensePlate(license_plate: string): Promise<Car>;
    findById(id: string): Promise<Car>;
    findAllCars(): Promise<Car[]>;
    deleteCar(id: string): Promise<DeleteResult>;
    putCar(id: string, {}: IPutCarDTO): Promise<UpdateResult>;
}

export { ICarsRepository };