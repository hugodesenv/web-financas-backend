export interface IAuthUseCase {
  execute(): Promise<void>;
}

export class AuthUseCase implements IAuthUseCase {
  constructor() { }

  async execute() {

  }
}