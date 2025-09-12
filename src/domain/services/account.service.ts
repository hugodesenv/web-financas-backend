import { IAccountRepository } from "../../infrastructure/repository/account.repository";

export interface IAccountService {
  login(username: string, password: string): Promise<boolean>
}

export class AccountService implements IAccountService {
  constructor(private accountRepository: IAccountRepository) { }

  async login(username: string, password: string): Promise<boolean> {
    const authenticated = await this.accountRepository.tryLogin(username, password);
    return authenticated;
  }
}