import { BankAccount } from "../../domain/entity/BankAccount";
import { IAppDataSource } from "../../shared/infra/config/app-data-source.config";
import { BaseRepository, IBaseRepository } from "./base.repository";

export interface IBankAccountRepository extends IBaseRepository<BankAccount> {
  findByCode(code: string): Promise<BankAccount | null>;
}

export class BankAccountRepository extends BaseRepository<BankAccount> implements IBankAccountRepository {
  constructor(appDataSource: IAppDataSource) {
    super(appDataSource, BankAccount);
  }

  async findByCode(code: string): Promise<BankAccount> {
    const repository = await this.repository();
    const where = { code };
    return await repository.findOne({ where });
  }
}