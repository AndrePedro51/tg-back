import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Drivers1669387336814 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "drivers",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "driver_license",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "license_category",
                        type: "varchar",
                    },
                    {
                        name: "antt",
                        type: "int",
                    },
                    {
                        name: "cnpj",
                        type: "varchar",
                    },
                    {
                        name: "active",
                        type: "boolean",
                        default: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("drivers");
    }
}
