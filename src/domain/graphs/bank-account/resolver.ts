import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { BankAccount } from "../../entity/BankAccount";
import { IBankAccountService } from "../../services/bank-account.service";

@Resolver(BankAccount)
export class BankAccountResolver {
  service = (ctx): IBankAccountService => {
    return ctx.di.bankAccountService;
  }

  @Query(() => [BankAccount])
  async banksAccount(@Ctx() ctx: any): Promise<BankAccount[]> {
    return this.service(ctx).findAll();
  }

  @Query(() => BankAccount, { nullable: true })
  async bankAccountByID(@Arg("code", () => String) code: string, @Ctx() ctx: any) {
    return this.service(ctx).findByCode(code);
  }
}