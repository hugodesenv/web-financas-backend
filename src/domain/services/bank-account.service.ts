import { IBankAccountRepository } from "../../infrastructure/repository/bank-account.repository";
import { BankAccount } from "../entity/BankAccount";
import { TBankAccountCreateSchema } from "../schemas/bank-account-create.schemas";

export interface IBankAccountService {
  create(data: TBankAccountCreateSchema): Promise<boolean>;
  findAll(): Promise<BankAccount[]>;
}

export class BankAccountService implements IBankAccountService {
  constructor(private bankAccountRepository: IBankAccountRepository) { }

  async create(data: { description: string; }): Promise<boolean> {
    return await this.bankAccountRepository.create(data);
  }

  async findAll(): Promise<BankAccount[]> {
    return await this.bankAccountRepository.findAll();
  }
}