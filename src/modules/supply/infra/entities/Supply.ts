import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("supply")
class Supply {
    @PrimaryColumn()
    id: string;

    @Column()
    car_id: string;

    @Column()
    driver_id: string;

    @Column()
    user_id: string;

    @Column()
    quantity: number;

    @Column()
    description: string;

    @Column()
    type: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Supply };
