import { asClass, createContainer } from "awilix";
import { Account } from "../../../../domain/entity/Account";
import { BankAccount } from "../../../../domain/entity/BankAccount";
import { AccountService } from "../../../../domain/services/account.service";
import { BankAccountService } from "../../../../domain/services/bank-account.service";
import { CreateBankAccountUseCase } from "../../../../application/use/bank-account/create.use";
import { AccountRepository } from "../../../../infrastructure/repository/account.repository";
import { BankAccountRepository } from './../../../../infrastructure/repository/bank-account.repository';

export const getContainer = () => {
  const container = createContainer({
    injectionMode: 'CLASSIC',
  });

  // ==> account.
  container.register({
    account: asClass(Account).scoped(),
    accountRepository: asClass(AccountRepository).scoped(),
    accountService: asClass(AccountService).scoped(),

    bankAccount: asClass(BankAccount).scoped(),
    bankAccountRepository: asClass(BankAccountRepository).scoped(),
    bankAccountService: asClass(BankAccountService).scoped(),
    createBankAccountUseCase: asClass(CreateBankAccountUseCase).scoped(),
  });

  return container;
}