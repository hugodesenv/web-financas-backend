import { IBankAccountService } from "../../../domain/services/bank-account.service";

export interface IDeleteBankAccountUseCase {
  execute(code: string): Promise<boolean>;
}

export class DeleteBankAccountUseCase implements IDeleteBankAccountUseCase {
  constructor(private bankAccountService: IBankAccountService) { }

  async execute(code: string): Promise<boolean> {
    const success = await this.bankAccountService.delete(code);
    
    if (!success) {
      throw new Error('Registro não atualizado ou não encontrado!');
    }

    return true;
  }
}