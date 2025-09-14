import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Entry1757469085307 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "entry",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "type",
                        type: "varchar",
                        enum: ["payable", "receivable"],
                    },
                    {
                        name: "fk_person",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "fk_purpose",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "issue_date",
                        type: "timestamp",
                        isNullable: false,
                    },
                    {
                        name: "observation",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "mode",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "total",
                        type: "double precision",
                        default: 0.0,
                    },
                    {
                        name: "fk_bank_account",
                        type: "varchar(7)",
                        isNullable: false,
                    },
                ],
            })
        );

        await queryRunner.createForeignKeys("entry", [
            new TableForeignKey({
                columnNames: ["fk_person"],
                referencedTableName: "person",
                referencedColumnNames: ["id"],
            }),
            new TableForeignKey({
                columnNames: ["fk_purpose"],
                referencedTableName: "purpose",
                referencedColumnNames: ["id"],
            }),
            new TableForeignKey({
                columnNames: ["fk_bank_account"],
                referencedTableName: "bank_account",
                referencedColumnNames: ["code"],
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("entry");
    }
}
