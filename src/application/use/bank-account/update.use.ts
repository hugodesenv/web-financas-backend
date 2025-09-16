import { TBankAccountUpdateSchema } from "../../../domain/schemas/bank-account.schemas";
import { IBankAccountService } from "../../../domain/services/bank-account.service";

export interface IUpdateBankAccountUseCase {
  execute(data: TBankAccountUpdateSchema): Promise<boolean>
}

export class UpdateBankAccountUseCase implements IUpdateBankAccountUseCase {
  constructor(private bankAccountService: IBankAccountService) { }

  async execute(data: TBankAccountUpdateSchema): Promise<boolean> {
    return await this.bankAccountService.update(data);
  }
}