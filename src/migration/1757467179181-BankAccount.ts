import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class BankAccount1757467179181 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'bank_account',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    generationStrategy: 'increment'
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
