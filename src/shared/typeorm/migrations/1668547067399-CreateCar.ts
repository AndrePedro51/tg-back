import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCar1668547067399 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cars",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "model",
                        type: "varchar"
                    },
                    {
                        name: "brand",
                        type: "varchar"
                    },
                    {
                        name: "license_plate",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "color",
                        type: "varchar"
                    },
                    {
                        name: "category",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cars");
    }

}
