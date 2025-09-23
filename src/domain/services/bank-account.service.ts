import { IBankAccountRepository } from "../../infrastructure/repository/bank-account.repository";
import { BankAccount } from "../entity/BankAccount";
import { TBankAccountCreateSchema, TBankAccountUpdateSchema } from "../schemas/bank-account.schemas";

export interface IBankAccountService {
  create(data: TBankAccountCreateSchema): Promise<boolean>;
  delete(code: string): Promise<boolean>;
  findAll(): Promise<BankAccount[]>;
  update(data: TBankAccountUpdateSchema): Promise<boolean>;
  findByCode(code: string): Promise<BankAccount>;
}

export class BankAccountService implements IBankAccountService {
  constructor(private bankAccountRepository: IBankAccountRepository) { }

  async findByCode(code: string): Promise<BankAccount> {
    return await this.bankAccountRepository.findByCode(code);
  }

  async delete(code: string): Promise<boolean> {
    return await this.bankAccountRepository.delete({ code });
  }

  async update(data: TBankAccountUpdateSchema): Promise<boolean> {
    const { code, ...rest } = data;
    return await this.bankAccountRepository.update(rest, { code });
  }

  async create(data: { description: string; }): Promise<boolean> {
    return await this.bankAccountRepository.create(data);
  }

  async findAll(): Promise<BankAccount[]> {
    return await this.bankAccountRepository.findAll();
  }
}