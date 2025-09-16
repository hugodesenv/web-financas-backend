import { EntityTarget, QueryBuilder, Repository } from "typeorm";
import { IAppDataSource } from "../../shared/infra/config/app-data-source.config";

export interface IBaseRepository<T> {
  create(data: any): Promise<boolean>;
  findAll(): Promise<T[]>;
  update(data: Record<string, any>, where: Record<string, any>): Promise<boolean>;
  delete(where: Record<string, any>): Promise<boolean>;
}

export class BaseRepository<T> implements IBaseRepository<T> {
  constructor(
    readonly appDataSource: IAppDataSource,
    readonly entity: EntityTarget<T>
  ) { }

  async delete(where: Record<string, any>): Promise<boolean> {
    const repository = await this.repository();

    let sql = repository
      .createQueryBuilder()
      .delete()
      .from(this.entity)
      .where(where);

    for (const whereKey in where) {
      const value = where[whereKey];
      sql = sql.andWhere(`${whereKey} = :${whereKey}`, { [whereKey]: value });
    }

    const query = await sql.execute();

    return (query.affected ?? 0) > 0;
  }

  async update(data: Record<string, any>, where: Record<string, any>): Promise<boolean> {
    const repository = await this.repository();

    let sql = repository
      .createQueryBuilder()
      .update(this.entity)
      .set(data);

    for (const whereKey in where) {
      const value = where[whereKey];
      sql = sql.andWhere(`${whereKey} = :${whereKey}`, { [whereKey]: value });
    }

    const query = await sql.execute();

    return (query.affected ?? 0) > 0;
  }

  async create(data: any): Promise<boolean> {
    const repository = await this.repository();

    await repository.createQueryBuilder()
      .insert()
      .into(this.entity)
      .values(data)
      .execute();

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