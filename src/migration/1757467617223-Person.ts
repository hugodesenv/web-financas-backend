import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Person1757467617223 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "person",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "80",
                        isNullable: false,
                    },
                    {
                        name: "nickname",
                        type: "varchar",
                        length: "80",
                        isNullable: true,
                    },
                    {
                        name: "active",
                        type: "boolean",
                        default: true,
                    },
                    {
                        name: "is_client",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "is_company",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "is_employee",
                        type: "boolean",
                        default: false,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("person");
    }
}
