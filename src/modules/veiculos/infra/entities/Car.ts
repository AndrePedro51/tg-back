import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid'

@Entity("cars")
class Car {
    @PrimaryColumn()
    id: string;

    @Column()
    model: string;
    
    @Column()
    brand: string;

    @Column()
    license_plate: string;

    @Column()
    color: string;

    @Column()
    category: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }
}

export { Car };