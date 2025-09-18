import { Person } from "../../domain/entity/Person";
import { IAppDataSource } from "../../shared/infra/config/app-data-source.config";
import { BaseRepository, IBaseRepository } from "./base.repository";

export interface IPersonRepository extends IBaseRepository<Person> { }

export class PersonRepository extends BaseRepository<Person> implements IPersonRepository {
  constructor(appDataSource: IAppDataSource) {
    super(appDataSource, Person);
  }
}