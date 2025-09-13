import { AccountService } from "../../../../domain/services/account.service";
import { BankAccountService } from "../../../../domain/services/bank-account.service";
import { AppDataSource } from "../app-data-source.config";

declare module '@fastify/awilix' {
  interface Cradle {
    appDataSource: AppDataSource,
    accountService: AccountService,
    bankAccountService: BankAccountService,
  }
  interface RequestCradle { }
}