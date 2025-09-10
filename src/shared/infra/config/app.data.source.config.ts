import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";

export interface IAppDataSource {
    getDataSource(): DataSource;
    dispose(): void;
}

export class AppDataSource implements IAppDataSource {
    private db: DataSourceOptions;
    constructor(db: DataSourceOptions) { this.db = db }

    dispose(): void {
        console.log("Banco de dados fechado!");
    }

    getDataSource() {
        return new DataSource(this.db);
    }
}
