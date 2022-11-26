import { ICreateCarDTO } from "../../dtos/ICreateCarsDtos";
import { ICarsRepository } from "../../../../modules/veiculos/repositories/ICarsRepository";
import { IPutCarDTO } from "../../dtos/IPutCarDtos";
import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository{
    private repository: Repository<Car>;

    constructor(){
        this.repository = getRepository(Car);
    }
    
    async create({brand, category, color, license_plate, model, id}: ICreateCarDTO): Promise<Car> {
        const car = this.repository.create({
            brand,
            category,
            color,
            license_plate,
            model,
            id
        })

        await this.repository.save(car);

        return car;
    }

    async findByLicensePlate(license_plate: string): Promise<Car> {
        const car = await this.repository.findOne({ license_plate });

        return car;
    }

    async findById(id: string): Promise<Car> {
        const car = await this.repository.findOne(id);

        return car;
    }

    async findAllCars(): Promise<Car[]> {
        const cars = await this.repository.find();

        return cars;
    }

    async deleteCar(id: string): Promise<DeleteResult> {
        const carDeleted = await this.repository.delete(id);

        return carDeleted;
    }

    async putCar(id: string, {
        license_plate,
        brand,
        color,
        model,
        category,
    }: IPutCarDTO): Promise<UpdateResult> {
        const carUpdated = await this.repository.update(id, {
            license_plate,
            brand,
            color,
            model,
            category
        });

        return carUpdated;
    }

}

export { CarsRepository };