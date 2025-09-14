import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class BankAccount1757467179181 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'bank_account',
            columns: [
                {
                    name: 'code',
                    type: 'varchar(7)',
                    isPrimary: true,
                },
                {
                    name: 'description',
                    type: 'varchar(50)',
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('bank_account');
    }
}
