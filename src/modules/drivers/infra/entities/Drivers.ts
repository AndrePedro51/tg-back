import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("drivers")
class Drivers {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    driver_license: number;

    @Column()
    license_category: string;

    @Column()
    antt: number;

    @Column()
    cnpj: string;

    @Column()
    active: boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Drivers };
