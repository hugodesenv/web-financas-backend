import { EntityTarget, Repository } from "typeorm";
import { IAppDataSource } from "../../shared/infra/config/app-data-source.config";

export interface IBaseRepository<T> {
  create(data: any): Promise<boolean>;
  findAll(): Promise<T[]>;
}

export class BaseRepository<T> implements IBaseRepository<T> {
  constructor(
    readonly appDataSource: IAppDataSource,
    readonly entity: EntityTarget<T>
  ) { }

  async create(data: any): Promise<boolean> {
    const repository = await this.repository();

    const res = await repository.createQueryBuilder()
      .insert()
      .into(this.entity)
      .values(data)
      .execute();

    console.log('resultado', res);

    return true;
  }

  async repository(): Promise<Repository<T>> {
    const source = await this.appDataSource.getDataSource();
    return source.getRepository(this.entity);
  }

  async findAll(): Promise<T[]> {
    const rep = await this.repository();
    return await rep.find();
  }
}