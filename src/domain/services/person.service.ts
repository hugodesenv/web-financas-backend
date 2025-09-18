import { IPersonRepository } from "../../infrastructure/repository/person.repository";
import { TPersonListSchemaDTO } from "../schemas/person.schemas";

export interface IPersonService {
  findAll(): Promise<TPersonListSchemaDTO[]>;
}

export class PersonService implements IPersonService {
  constructor(private personRepository: IPersonRepository) { }

  async findAll(): Promise<TPersonListSchemaDTO[]> {
    const data = await this.personRepository.findAll();
    return data;
  }
}