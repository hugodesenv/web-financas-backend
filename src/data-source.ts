import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "db_web",
    synchronize: false,
    logging: false,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrations: [],
    subscribers: [],
    migrationsTableName: "script"
})
