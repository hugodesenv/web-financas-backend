import { TBankAccountCreateSchema } from "../../../domain/schemas/bank-account-create.schemas";
import { IBankAccountService } from "../../../domain/services/bank-account.service";

export interface ICreateBankAccountUseCase {
  execute(data: TBankAccountCreateSchema): Promise<boolean>
}

export class CreateBankAccountUseCase implements ICreateBankAccountUseCase {
  constructor(private bankAccountService: IBankAccountService) { }

  async execute(data: TBankAccountCreateSchema): Promise<boolean> {
    return await this.bankAccountService.create(data);
  }
}