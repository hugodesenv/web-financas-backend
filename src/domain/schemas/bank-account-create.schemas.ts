import { Type } from "@fastify/type-provider-typebox";

export const BankAccountCreateSchema = Type.Object({
  code: Type.String({ maxLength: 7 }),
  description: Type.String({ maxLength: 50 }),
});

export type TBankAccountCreateSchema = typeof BankAccountCreateSchema.static;