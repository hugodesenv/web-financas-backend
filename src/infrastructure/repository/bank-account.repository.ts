import { BankAccount } from "../../domain/entity/BankAccount";
import { IAppDataSource } from "../../shared/infra/config/app-data-source.config";
import { BaseRepository, IBaseRepository } from "./base.repository";

export interface IBankAccountRepository extends IBaseRepository<BankAccount> { }

export class BankAccountRepository extends BaseRepository<BankAccount> implements IBankAccountRepository {
  constructor(appDataSource: IAppDataSource) {
    super(appDataSource, BankAccount);
  }
}