import { bankAccountSchema, bankAccountTypeSchema } from "./bankAccount.graph";
import { personSchema, personTypeSchema } from "./person.graph";

export const schema = `
  type Query {
    hello: String
    ${bankAccountSchema}
    ${personSchema}
  },

  ${bankAccountTypeSchema}
  ${personTypeSchema}
`;