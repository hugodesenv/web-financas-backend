import "reflect-metadata"
import { DataSource } from "typeorm"
import { Account } from "./domain/entity/Account"
import { BankAccount } from "./domain/entity/BankAccount"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "db_web",
    synchronize: false,
    logging: false,
    entities: [
        Account,
        BankAccount,
    ],
    migrations: [],
    subscribers: [],
    migrationsTableName: "script"
})
