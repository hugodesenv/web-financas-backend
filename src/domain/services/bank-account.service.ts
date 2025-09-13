import { IBankAccountRepository } from "../../infrastructure/repository/bank-account.repository";
import { BankAccount } from "../entity/BankAccount";

export interface IBankAccountService {
  findAll(): Promise<BankAccount[]>;
}

export class BankAccountService implements IBankAccountService {
  constructor(private bankAccountRepository: IBankAccountRepository) { }

  async findAll(): Promise<BankAccount[]> {
    return await this.bankAccountRepository.findAll();
  }
}