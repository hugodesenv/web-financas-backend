import { AccountService } from "../../../../domain/services/account.service";
import { BankAccountService } from "../../../../domain/services/bank-account.service";
import { CreateBankAccountUseCase } from "../../../../application/use/bank-account/create.use";
import { AppDataSource } from "../app-data-source.config";
import { UpdateBankAccountUseCase } from "../../../../application/use/bank-account/update.use";
import { DeleteBankAccountUseCase } from "../../../../application/use/bank-account/delete.use";

declare module '@fastify/awilix' {
  interface Cradle {
    appDataSource: AppDataSource,

    accountService: AccountService,
    bankAccountService: BankAccountService,
    createBankAccountUseCase: CreateBankAccountUseCase,
    deleteBankAccountUseCase: DeleteBankAccountUseCase,
    updateBankAccountUseCase: UpdateBankAccountUseCase,
  }
  interface RequestCradle { }
}