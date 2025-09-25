import { IPersonRepository } from "../../infrastructure/repository/person.repository";
import { TPersonCreateSchema, TPersonListSchemaDTO } from "../schemas/person.schemas";

export interface IPersonService {
  create(data: TPersonCreateSchema): Promise<boolean>;
  findAll(): Promise<TPersonListSchemaDTO[]>;
}

export class PersonService implements IPersonService {
  constructor(private personRepository: IPersonRepository) { }

  async create(data: TPersonCreateSchema): Promise<boolean> {
    const res = await this.personRepository.create(data);
    return res;
  }

  async findAll(): Promise<TPersonListSchemaDTO[]> {
    const data = await this.personRepository.findAll();
    return data;
  }
}