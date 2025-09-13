import { asClass, createContainer } from "awilix";
import { AccountRepository } from "../../../../infrastructure/repository/account.repository";
import { AccountService } from "../../../../domain/services/account.service";
import { Account } from "../../../../domain/entity/Account";

export const getContainer = () => {
  const container = createContainer({
    injectionMode: 'CLASSIC',
  });

  // ==> account.
  container.register({
    account: asClass(Account).scoped(),
    accountRepository: asClass(AccountRepository).scoped(),
    accountService: asClass(AccountService).scoped(),
  });

  return container;
}