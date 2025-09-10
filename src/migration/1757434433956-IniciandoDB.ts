import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class IniciandoDB1757434433956 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'account',
                columns: [
                    {
                        name: "username",
                        type: "varchar(40)",
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: "password",
                        type: "text",
                    },
                    {
                        name: "active",
                        type: "boolean"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('account');
    }
}
