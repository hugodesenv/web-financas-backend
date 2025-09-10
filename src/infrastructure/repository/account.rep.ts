import { IAppDataSource } from '../../shared/infra/config/app.data.source.config';

export interface IAccountRepository { }

export class AccountRepository implements IAccountRepository {
  constructor(private dataSource: IAppDataSource) { }
}