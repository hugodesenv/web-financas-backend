import { Type } from "@fastify/type-provider-typebox";

// commom data between create and update schemas.
const BankAccountCreateAndUpdateSchema = Type.Object({
  code: Type.String({ maxLength: 7 }),
  description: Type.String({ maxLength: 50 }),
});

export const BankAccountCreateSchema = BankAccountCreateAndUpdateSchema;
export const BankAccountUpdateSchema = BankAccountCreateAndUpdateSchema;

export type TBankAccountCreateSchema = typeof BankAccountCreateSchema.static;
export type TBankAccountUpdateSchema = typeof BankAccountUpdateSchema.static;