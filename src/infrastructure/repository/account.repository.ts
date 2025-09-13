import { IAppDataSource } from '../../shared/infra/config/app-data-source.config';
import { Account } from './../../domain/entity/Account';
import { BaseRepository, IBaseRepository } from "./base.repository";
export interface IAccountRepository extends IBaseRepository<Account> {
  tryLogin(username: string, password: string): Promise<boolean>
}

export class AccountRepository extends BaseRepository<Account> implements IAccountRepository {
  constructor(appDataSource: IAppDataSource) {
    super(appDataSource, Account);
  }

  async tryLogin(username: string, password: string): Promise<boolean> {
    try {
      const respository = await this.repository();
      await respository.findOneOrFail({
        where: {
          username,
          password,
          active: true
        }
      });

      return true;
    } catch (e) {
      return false;
    }
  }
}