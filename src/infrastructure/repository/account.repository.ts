import { IAppDataSource } from "../../shared/infra/config/app-data-source.config";
import { Account } from "../../domain/entity/Account";

export interface IAccountRepository {
  tryLogin(username: string, password: string): Promise<boolean>
}

export class AccountRepository implements IAccountRepository {
  constructor(private appDataSource: IAppDataSource) { }

  private _repository = async () => (await this.appDataSource.getDataSource()).getRepository(Account);

  async tryLogin(username: string, password: string): Promise<boolean> {
    try {
      await (await this._repository()).findOneOrFail({
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