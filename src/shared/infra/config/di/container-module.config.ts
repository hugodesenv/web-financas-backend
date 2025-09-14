import { AccountService } from "../../../../domain/services/account.service";
import { BankAccountService } from "../../../../domain/services/bank-account.service";
import { CreateBankAccountUseCase } from "../../../../application/use/bank-account/create.use";
import { AppDataSource } from "../app-data-source.config";

declare module '@fastify/awilix' {
  interface Cradle {
    appDataSource: AppDataSource,

    accountService: AccountService,
    bankAccountService: BankAccountService,
    createBankAccountUseCase: CreateBankAccountUseCase,
  }
  interface RequestCradle { }
}