import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";

export interface IAppDataSource {
    getDataSource(): Promise<DataSource>;
    dispose(): void;
}

export class AppDataSource implements IAppDataSource {
    private _db: DataSourceOptions;
    private _dataSource: DataSource;

    constructor(db: DataSourceOptions) { this._db = db }

    dispose(): void {
        console.log("Banco de dados fechado!");
    }

    async getDataSource() {
        if (!this._dataSource || !this._dataSource.isInitialized) {
            this._dataSource = new DataSource(this._db);
            await this._dataSource.initialize();
        }

        return this._dataSource;
    }
}
